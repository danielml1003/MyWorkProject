import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { styles } from '../Style/style';
import * as firebase from 'firebase';
import {SignInUser} from '../api/userApi';
import * as Firebase from 'firebase'
import * as Google from 'expo-google-app-auth';
export const Home = ({ navigation }) => {

    
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('');

    return <View style={styles.container}>
        <Text style={styles.title}> welcome to my app </Text>
        <TextInput 
        style = {styles.input} 
        placeholder = "email "
        value={email}
        onChangeText = {(email) => setEmail (email)}>
        </TextInput>
        <TextInput 
        style = {styles.input} 
        placeholder = "password "
        value={password}
        onChangeText = {(password) => setPassword (password)}>
        </TextInput>
        
            <Button title = {"sign in"}
            onPress = {() => SignInUser(email, password, navigation)}
            />
            <Button title = {"sign up"}
            onPress = {() => navigation.navigate("signUp")}/>
             <Button title = {"Google"}
            onPress = {() =>  {signInWithGoogleAsync(); (navigation.navigate("AfterLoginScreen"))}}/>
        </View>
};
export const signInWithGoogleAsync = async () => {
    try {
        const result = await Google.logInAsync({ behavion: 'web', androidClientId: "425792552655-ch0j41i74n58evb2frnbp3l1af9hhoes.apps.googleusercontent.com",  scopes: ["profile", "email"] });
        if (result.type === "success") { // I get result object
            const credential = Firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
            /* credential is and xf {} object */
            
            try {
                
                Firebase.auth().signInWithCredential(credential).then(user => { console.log(user); }).catch(error => { alert(error); });                   
                return result.accessToken;
            }
            catch (err) {
                console.log(err.message)
            }

        }
        
        return { cancelled: true };
    } 
    catch (e) {
        return { error: true };
    }
};
// export default class AuthScreen extends React.Component {
//     state = { user: null };
  
//     componentDidMount() {
//       this.initAsync();
//     }
  
//     initAsync = async () => {
//       await GoogleSignIn.initAsync({
//         // You may ommit the clientId when the firebase `googleServicesFile` is configured
//         clientId: '<425792552655-j0ml0cuon1soqi8l0piaq7t8omejhonm.apps.googleusercontent.com>',
//       });
//       this._syncUserWithStateAsync();
//     };
  
//     _syncUserWithStateAsync = async () => {
//       const user = await GoogleSignIn.signInSilentlyAsync();
//       this.setState({ user });
//     };
  
//     signOutAsync = async () => {
//       await GoogleSignIn.signOutAsync();
//       this.setState({ user: null });
//     };
  
//     signInAsync = async () => {
//       try {
//         await GoogleSignIn.askForPlayServicesAsync();
//         const { type, user } = await GoogleSignIn.signInAsync();
//         if (type === 'success') {
//           this._syncUserWithStateAsync();
//         }
//       } catch ({ message }) {
//         alert('login: Error:' + message);
//       }
//     };
  
//     onPress = () => {
//       if (this.state.user) {
//         this.signOutAsync();
//       } else {
//         this.signInAsync();
//       }
//     };
  
//     render() {
//       return <Text onPress={this.onPress}>Toggle Auth</Text>;
//     }
//   }