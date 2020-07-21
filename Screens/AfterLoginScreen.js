import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { styles } from '../Style/style';
import { signOutAsync } from 'expo-google-sign-in';
import { SignOut } from '../api/userApi';


export const AfterLoginScreen = ({ navigation }) => {

    
    return <View style={styles.container}>
     <Button 
         title = "create an employee"
         onPress = {() => {navigation.navigate("CreateWorker")}}
     />
     <Button 
    style ={styles.buttonText}
    title = "employee list"
    onPress = {() => {navigation.navigate("WorkerList")}}
     />
    <Button 
        title = "delete"
        onPress = {() => navigation.navigate("FindById")}
        
    />
    <Button 
        title = "update worker"
        onPress = {() => navigation.navigate("UpdateEmp")}
    />

    <Button 
        title = "sign out"
        onPress = {() => SignOut()}
    />

        
    </View>
};