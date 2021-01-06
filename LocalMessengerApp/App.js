import React from 'react';
import DialogsScreen from './components/Dialogs/DialogsScreen';
import Correspondence from './components/Сorrespondence/Correspondence';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

const NavigationStack = createStackNavigator();


const App = (props) => {
  StatusBar.setBarStyle('#7a7a7a');

  return (
    <NavigationContainer>
      <NavigationStack.Navigator screenOptions={{headerShown: false}}>
        <NavigationStack.Screen name={"DialogsScreen"}
                                component={DialogsScreen}
                                initialParams={{...props}} />
        <NavigationStack.Screen name={"Correspondence"}
                                component={Correspondence}
                                initialParams={{...props}}/>
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
