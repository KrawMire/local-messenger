import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const OwnMessage = (props) => {
  return (
    <View style={styles.ownmessage}>
      <Text style={styles.ownmessagetext}>{props.messageText}</Text>
    </View>
  )
};

const TheirMessage = (props) => {
  return (
    <View style={styles.theirmessage}>
      <Text style={styles.theirmessagetext}>{props.messageText}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  theirmessage: {
    backgroundColor: '#373539',
    width: '51%',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 8,
    padding: 20,
    borderBottomEndRadius: 35,
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    textAlign: 'center'
  },
  theirmessagetext: {
    color: '#dddddd',
  },
  ownmessage: {
    backgroundColor: '#b7b7b7',
    width: '51%',
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    marginRight: 8,
    borderBottomStartRadius: 35,
    borderTopEndRadius: 35,
    borderTopStartRadius: 35
  },
  ownmessagetext: {
    fontSize: 16,
    color: '#2b2b2b'
  }
});

export {OwnMessage, TheirMessage};
