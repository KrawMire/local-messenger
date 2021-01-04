import React from 'react';
import {TheirMessage, OwnMessage} from './Message';
import {View, StyleSheet, ScrollView, Text} from 'react-native';

const Correspondence = () => {
  let theirMessageText = 'This is a simple THEIR message.';
  let ownMessageText = 'This is a simple OWN message.';

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headertext}>Tatyana Lapina</Text>
      </View>
      <ScrollView>
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
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#d9d9d9',
    height: '6%',
    elevation: 50,
    width: '100%',
  },
  headertext: {
    alignSelf: 'flex-end',
    marginRight: 20,
    fontSize: 25,
    fontWeight: 'bold'
  }
});

export default Correspondence;
