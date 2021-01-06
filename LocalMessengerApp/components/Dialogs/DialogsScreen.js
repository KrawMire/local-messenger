import React, {useEffect, useReducer, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import Dialog from './Dialog';
import SearchBox from './SearchBox';
import MessagePlaceholder from './MessagePlaceholder';

function sendRequest(api, timems) {
  let data = {
    token: "qwerty12345asdfgzxcvb"
  }

  return new Promise((resolve, reject) => {
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then(resolve, reject);

    setTimeout(reject.bind(null, new Error("Request timed out!")), timems);
  });
}

const DialogsScreen = (props) => {
  const componentProps = props.route.params;
  const [inputText, setInputText] = useState('');
  const [loadingMessages, setLoadingMessages] = useState({isLoading: true, messages: []});
  const [isUpdate, forceUpdate] = useState(false);


  const successCallBack = (data) => {
    if (!data.error) {
      let fetchedMessages = [];

      for (let i = 0; i < data.length; i++) {
        fetchedMessages.push({id: data[i].id, header: data[i].header, message: data[i].messageText});
      }

      let filteredMessages = fetchedMessages.filter((message) => {
        return (message.header.toUpperCase().indexOf(inputText.toUpperCase()) !== -1
          || message.message.toUpperCase().indexOf(inputText.toUpperCase()) !== -1)
      });

      forceUpdate(false);
      setLoadingMessages({isLoading: false, messages: filteredMessages});
    } else {
      console.log(data.message);
    }
  }

  const failCallBack = (error) => {
    setLoadingMessages({isLoading: false, messages: []})
  }

  useEffect(() => {
    setLoadingMessages({isLoading: true, messages: []});
    sendRequest(componentProps.apiUrl, 8000)
      .then(response => response.json())
      .then((data) => successCallBack(data))
      .catch((error) => failCallBack(error));
  }, [inputText, isUpdate]);

  const onRefresh = () => {
    forceUpdate(true);
    setLoadingMessages({isLoading: true, messages: []});
  }

  let messages;

  if (!loadingMessages.isLoading) {
    if (loadingMessages.messages.length === 0) {
      messages = (
        <Text style={{alignSelf: 'center'}}>An error occured while request.
          <Text style={{color: "#007bbc"}}
                onPress={() =>{
                  forceUpdate(x => !x);
                  setLoadingMessages({isLoading: true, messages: []});
                }}>
            Click here to refresh.
          </Text>
        </Text>
      )
    } else {
      messages = (
        <ScrollView refreshControl={<RefreshControl refreshing={isUpdate} onRefresh={onRefresh}/>}>
          {loadingMessages.messages.map(message => (
            <Dialog header={message.header}
                    message={message.message}
                    key={message.id}
                    navigateScreen={() => props.navigation.navigate('Correspondence', {
                      ...componentProps,
                      header: message.header
                    })}
            />)
          )}
        </ScrollView>
      );
    }
  } else {
    messages = [];

    for (let i = 0; i < 10; i++) {
      messages.push(
        <MessagePlaceholder key={i}/>
      )
    }
  }

  return (
    <View style={styles.body}>
      <SearchBox handleInput={(text) => setInputText(text)} />
        {messages}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Roboto'
  },

});

export default DialogsScreen;
