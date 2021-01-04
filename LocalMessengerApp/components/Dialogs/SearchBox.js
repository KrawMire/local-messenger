import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBox = (props) => {
    return (
        <View style={styles.searchbox}>
            <TextInput style={styles.searchboxinput}
                       placeholder={"Search..."}
                       onChangeText={(text) => props.handleInput(text)}
            />
            <Icon name={'search'}
                  type={'font-awesome'}
                  color={'#A7A7A7'}
                  size={20}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    searchbox: {
        backgroundColor: '#EEEEEE',
        margin: 30,
        borderRadius: 40,
        paddingLeft: 25,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchboxinput: {
        fontSize: 15,
        flex: 1,
    }
});

export default SearchBox;
