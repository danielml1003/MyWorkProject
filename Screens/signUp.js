import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { styles } from '../Style/style';
import * as firebase from 'firebase';
import { CreateUser } from '../api/userApi';

export const signUp = ({ navigation }) => {

    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    return <View style={styles.container}>
     
        <TextInput 
        style = {styles.input} 
        placeholder = "email"
        value={email}
        onChangeText = {(email) => setEmail (email)}></TextInput>
        <TextInput 
        style = {styles.input} 
        placeholder = "username "
        value = {username}
        onChangeText = {(username) => setUsername (username)}
        ></TextInput>
        <TextInput 
        style = {styles.input} 
        placeholder = "password"
        value={password} 
        onChangeText = {(password) => setPassword (password)} ></TextInput>
        <TextInput style = {styles.input} placeholder = "repassword "></TextInput>
        <Button title = {"sign up"}
        onPress = {() => CreateUser(email, password, navigation)}/>
        <Button title = {"back"}
        onPress = {() => {navigation.navigate("Home"); }} />
    </View>
};