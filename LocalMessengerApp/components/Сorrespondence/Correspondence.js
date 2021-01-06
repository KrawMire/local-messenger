import React from 'react';
import {TheirMessage, OwnMessage} from './Message';
import {View, StyleSheet, ScrollView} from 'react-native';
import CorrespondenceHeader from './CorrespondenceHeader';
import MessageInput from './MessageInput';

const Correspondence = (props) => {
  let theirMessageText = 'This is a simple THEIR message.';
  let ownMessageText = 'This is a simple OWN message.';

  return (
    <View>
      <CorrespondenceHeader {...props}/>
        <ScrollView style={{height: '85%'}}>
          <TheirMessage messageText={theirMessageText}/>
          <OwnMessage messageText={ownMessageText}/>
          <OwnMessage messageText={ownMessageText}/>
          <OwnMessage messageText={ownMessageText}/>
          <TheirMessage messageText={theirMessageText}/>
          <TheirMessage messageText={theirMessageText}/>
          <OwnMessage messageText={ownMessageText}/>
          <OwnMessage messageText={ownMessageText}/>
          <TheirMessage messageText={theirMessageText}/>
          <OwnMessage messageText={ownMessageText}/>
          <TheirMessage messageText={theirMessageText}/>
          <TheirMessage messageText={theirMessageText}/>
          <TheirMessage messageText={theirMessageText}/>
          <OwnMessage messageText={ownMessageText}/>
          <OwnMessage messageText={ownMessageText}/>
          <TheirMessage messageText={theirMessageText}/>
          <TheirMessage messageText={theirMessageText}/>
        </ScrollView>
      <MessageInput />
    </View>
  )
};

const styles = StyleSheet.create({

});

export default Correspondence;
