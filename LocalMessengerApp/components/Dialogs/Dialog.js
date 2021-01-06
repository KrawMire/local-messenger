import React from 'react';
import {Text, View, StyleSheet, TouchableNativeFeedback} from 'react-native';

const Dialog = (props) => {
    return (
      <TouchableNativeFeedback onPress={() => props.navigateScreen()}>
          <View style={styles.message}>
              <Text style={styles.senderheader}>{props.header}</Text>
              <Text style={styles.messagetext}>{props.message}</Text>
          </View>
      </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({
    message: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#DEDEDE',
        height: 85,
        width: '95%',
        justifyContent: 'center',
        paddingHorizontal: 30,
        marginVertical: 4,
        alignSelf: 'center',
    },
    senderheader: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    messagetext: {
        fontSize: 13,
        color: '#A3A3A3',
        paddingTop: 2
    }
})

export default Dialog;
