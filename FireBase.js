import React, {useState} from 'react';
import firebase from 'react-native-firebase'
import { View } from 'react-native';
import firestore from "@react-native-firebase/firestore"
import { styles } from '../Style/style';

class firebaseApp extends Component {
    state = {
        user: []
    }


    constructor(props){
        super(props);
        this.getUser();
        this.subscriber = 
        firestore()
        .collection("users")
        .onSnapshot(docs => {
            let users = []
            docs.forEach(doc => {
                users.push(doc.data())    
            })
            this.setState({users})
        })
        ()
        firestore()
        .collection('Users')
        .get()
        .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        });
    });
    }

    getUser = async () => {
        const userDocument = await firestore().collection("users").
        doc('LSGapqMsQzgRIRJR6vfv').get();

    }

    
}

