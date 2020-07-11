import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';

import * as firebase from 'firebase';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#3498db',
        justifyContent: 'center'
    },
    title: {
        fontWeight:"bold",
        fontSize: 30,
        color:"#fff",
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        height: 40,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        marginBottom: 10

    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    }
});

firebase.auth().createUserWithEmailAndPassword()

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );


export const Home = ({ navigation }) => {
    return <ScreenContainer>
        
        <Text style={styles.title}> welcome to my app </Text>
        <TextInput style = {styles.input} placeholder = "username "></TextInput>
        <TextInput style = {styles.input} placeholder = "password "></TextInput>
        
            <Button title = {"sign in"}
            onPress = {() => navigation.navigate("AfterLogin")}
            />
            <Button title = {"sign up"}
            onPress = {() => navigation.navigate("signUp")}/>
       
        
    </ScreenContainer>
};

export const signUp = ({ navigation }) => {
    return <ScreenContainer>
     
        <TextInput style = {styles.input} placeholder = "email "></TextInput>
        <TextInput style = {styles.input} placeholder = "username "></TextInput>
        <TextInput style = {styles.input} placeholder = "password "></TextInput>
        <TextInput style = {styles.input} placeholder = "repassword "></TextInput>
        <Button title = {"sign up"}

        onPress = {() => navigation.navigate("Home")} />
        <Button title = {"back"}
        onPress = {() => navigation.navigate("Home")} />
    </ScreenContainer>
};


export const AfterLogin = ({ navigation }) => {
    return <ScreenContainer>
        
    </ScreenContainer>
};



