import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(firestorePlugin)

// Get a Firestore instance
export const db = firebase
    .initializeApp({
        apiKey: 'AIzaSyCRRZ70oYIZepksM6EgBiDuEQZyh1uoGFQ',
        authDomain: 'expo-platform.firebaseapp.com',
        databaseURL: 'https://expo-platform.firebaseio.com',
        projectId: 'expo-platform',
        storageBucket: 'expo-platform.appspot.com',
        messagingSenderId: '874501325646',
        appId: '1:874501325646:web:453bf8c2e56b4d80c7541f'
    })
    .firestore()