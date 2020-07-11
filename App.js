import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Home, signUp, AfterLogin } from './App/Screens';
import { firebaseConfig } from './App/DataBase';

const AuthSwitch = createSwitchNavigator({
  Home: Home, 
  signUp: signUp,
  AfterLogin:AfterLogin
});

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const AuthNav = createAppContainer(AuthSwitch);

export default () => {
   return <AuthNav />
};


