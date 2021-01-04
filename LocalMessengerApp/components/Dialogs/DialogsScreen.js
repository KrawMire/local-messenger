import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Dialog from './Dialog';
import SearchBox from './SearchBox';

function sendRequest(api, successCallback, failCallback) {
  let data = {
    token: "qwerty12345asdfgzxcvb"
  }

  fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => successCallback(data))
    .catch((error) => failCallback(error));
}

const DialogsScreen = (props) => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  let url = props.apiUrl;

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
      setMessages(filteredMessages);
    } else {
      console.log(data.message);
    }
  }

  const failCallBack = (error) => {
    console.log(error);
  }

  useEffect(() => {
    sendRequest(url, successCallBack, failCallBack);
  }, [inputText]);

  return (
    <View style={styles.body}>
      <SearchBox handleInput={(text) => setInputText(text)} />
      <ScrollView>
        {messages.map(message => (
          <Dialog header={message.header}
                   message={message.message}
                   key={message.id}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Roboto'
  }
});

export default DialogsScreen;
