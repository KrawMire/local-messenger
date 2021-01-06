import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CorrespondenceHeader = (props) => {
  const componentProps = props.route.params;

  return (
    <View style={styles.header}>
      <Icon.Button name={'chevron-left'}
                   type={'font-awesome'}
                   color={'#5b5b5b'}
                   size={30}
                   style={styles.gobackbutton}
                   backgroundColor={'transparent'}
                   onPress={() => props.navigation.goBack()}
                   underlayColor={'#bebebe'}
      />
      <Text style={styles.headertext}>{componentProps.header}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#d0d0d0',
    height: 55,
    elevation: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headertext: {
    marginRight: 20,
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    right: 0
  },
  gobackbutton: {
    marginLeft: 5,
    flex: 1,

  }
});

export default CorrespondenceHeader;
