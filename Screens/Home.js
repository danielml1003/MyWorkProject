import React, {useState, Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { styles } from '../Style/style';
import {SignInUser} from '../api/userApi';
import  firebase from 'firebase'
import * as Google from 'expo-google-app-auth';




export const Home = ({ navigation }) => {
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
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
             <Button title = {"sign in with Google"}
            onPress = {() =>  signInWithGoogleAsync()}/>
        </View>)
};

   export const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
    };
   export const onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInAndRetrieveDataWithCredential(credential)
            .then(function(result) {
              console.log('user signed in ');
              if (result.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .set({
                    gmail: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now()
                  })
                  .then(function(snapshot) {
                    // console.log('Snapshot', snapshot);
                  });
              } else {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .update({
                    last_logged_in: Date.now()
                  });
              }
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }.bind(this)
    );
  };


    export const signInWithGoogleAsync = async () => {
        try {
          const result = await Expo.Google.logInAsync({
            behavior: 'web',
            androidClientId: '425792552655-j0ml0cuon1soqi8l0piaq7t8omejhonm.apps.googleusercontent.com',         
            //iosClientId: '', enter ios client id
            scopes: ['profile', 'email']
          });
    
          if (result.type === 'success') {
            this.onSignIn(result);
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      };


//425792552655-ch0j41i74n58evb2frnbp3l1af9hhoes.apps.googleusercontent.com
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