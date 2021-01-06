import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Fade, Placeholder, PlaceholderLine} from 'rn-placeholder';

const MessagePlaceholder = (props) => {
  return (
    <Placeholder Animation={Fade}>
      <View style={styles.mainplaceholderview}>
        <View style={styles.innerplaceholderview}>
          <PlaceholderLine width={40} height={30} style={{marginTop: 15}}/>
          <PlaceholderLine width={90} height={15} style={{marginTop: -20}}/>
        </View>
      </View>
    </Placeholder>
  );
}

const styles = StyleSheet.create({
  mainplaceholderview: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#DEDEDE',
    height: 85,
    width: '95%',
    paddingHorizontal: 30,
    marginVertical: 4,
    alignSelf: 'center',
  },
  innerplaceholderview: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default MessagePlaceholder;
