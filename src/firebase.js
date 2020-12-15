import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDmjZNiGA92UUc_Zpx3qJJ0h62Gc3tmYNM",
    authDomain: "moivesapp.firebaseapp.com",
    databaseURL: "https://moivesapp.firebaseio.com",
    projectId: "moivesapp",
    storageBucket: "moivesapp.appspot.com",
    messagingSenderId: "1073201749961",
    appId: "1:1073201749961:web:d8766f5e669b459af3d218",
    measurementId: "G-F8NRNH8492"
})

export const auth = firebaseApp.auth();
export default firebaseApp
