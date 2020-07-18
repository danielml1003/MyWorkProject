import React, {useState, Component} from 'react';
import { render } from "react-dom"
import { View, Text, TextInput, Button, ActivityIndicator } from "react-native";
import { styles } from '../Style/style';
import firebase from 'firebase';

export const LoadingScreen = ({navigation}) => {

    // export const componentDidMount = () => {  
    //     checkIfLoggedIn();
    // }
    
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            navigation.navigate('AfterLoginScreen');
        }
        else {
            navigation.navigate('Home');
        }
    })
    return (
        <View style={styles.container} >
        <ActivityIndicator size = "large"/>
        </View>
    );
    //ultrakillua1003@gmail.com
    //2502252
//      export const checkIfLoggedIn = () => {
//         firebase.auth().onAuthStateChanged(user =>
//         {
//             console.log('AUTH STATE CHANGED CALLED ')
//             if(user)
//             {
//                 navigation.navigate('AfterLoginScreen');
//             }
//             else{
//                 navigation.navigate('Home');
//             }
//         });
    
//     return (
//        <View style={styles.container} >
//        <ActivityIndicator size = "large"/>
//        </View>
//    );
}

