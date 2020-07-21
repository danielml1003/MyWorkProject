import React, {Component}from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Home, signInWithGoogleAsync, onSignIn, isUserEqual} from './Screens/Home';
import { signUp } from './Screens/signUp';
import { firebaseConfig } from './DataBase';
import * as firebase from 'firebase';
import {AfterLoginScreen} from './Screens/AfterLoginScreen';
import { CreateWorker } from './Screens/CreateWorker';
import { WorkerList } from './Screens/WorkList'
import { FindById } from './Screens/FindById';
import { UpdateEmp } from './Screens/UpdateEmp'
import { LoadingScreen } from './Screens/LoadingScreen'


firebase.initializeApp(firebaseConfig)

const AuthSwitch = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  Home: Home, 
  signUp: signUp,
  AfterLoginScreen: AfterLoginScreen,
  CreateWorker: CreateWorker,
  WorkerList:WorkerList,
  FindById:FindById,
  UpdateEmp:UpdateEmp,
  signInWithGoogleAsync:signInWithGoogleAsync,
});

// Initialize Firebase

const AuthNav = createAppContainer(AuthSwitch);

export default () => {
   return <AuthNav />
};




