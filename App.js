/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Router from '@navigator/index';
import messaging from '@react-native-firebase/messaging';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

const App = () => {
  // const registerFCM = async () => {
  //   await messaging().registerDeviceForRemoteMessages();
  //   const token = await messaging().getToken();
  //   console.log('token', token);
  // };
  // useEffect(() => {
  //   registerFCM();
  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     console.log('Message handled in the background!', remoteMessage);
  //   });
  // }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
