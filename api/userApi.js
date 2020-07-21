import * as firebase from 'firebase';

export async function CreateUser(email, password, navigation) {
    firebase.auth().
    createUserWithEmailAndPassword(email, password).then(() => {
        firebase.auth().onAuthStateChanged(user => {
            navigation.navigate("Home")
        })
        alert("Hello there")
    })
}

export async function SignInUser(email, password, navigation) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
        alert(cred.user)
        navigation.navigate("AfterLoginScreen");
    })
}

export async function SignOut() {
    firebase.auth().signOut().then(() => {
        alert("User sign out!")
    })
}
