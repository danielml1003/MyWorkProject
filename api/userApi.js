import * as firebase from 'firebase';

export async function CreateUser(name, email, password) {
    firebase.auth().
    createUserWithEmailAndPassword(email, password).then(
        firebase.database().ref('users/' + name ).push({
            name, email, password
        }).catch((error) => {
            alert("Error: ", error)
        })
    )
}

export async function SignInUser(email, password, navigation) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(cred => {
        alert(cred.user)
        navigation.navigate("AfterLoginScreen");
    })
}
