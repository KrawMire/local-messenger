import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MessageInput = () => {
  return (
    <View style={styles.inputview}>
      <TextInput style={styles.messageinput} multiline={true}/>
      <Icon name={'send'}
            type={'font-awesome'}
            color={'#797979'}
            size={20}
            style={{marginRight: 20}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputview: {
    height: '7%',
    backgroundColor: '#d7d7d7',
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageinput: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 30,
    fontSize: 17,
    height: '60%',
    paddingHorizontal: 25,
    paddingVertical: 0,
    backgroundColor: '#ececec'
  }
});

export default MessageInput;
