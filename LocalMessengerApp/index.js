import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';

const regApp = () => {
  return (
    <App apiUrl="http://192.168.1.36:5001/api/messages"/>
  )
}

AppRegistry.registerComponent(appName, () => regApp);
