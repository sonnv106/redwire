import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC9YMTfU6vcnUm9sxV6v5fyVoJdekscuFw",
    authDomain: "redwire-f8683.firebaseapp.com",
    projectId: "redwire-f8683",
    storageBucket: "redwire-f8683.appspot.com",
    messagingSenderId: "540713066206",
    appId: "1:540713066206:web:26c8b09d89603b8154ec4f",
    measurementId: "G-H5MQWCQDQK"
  };
  
  firebase.initializeApp(config);
  const DB = firebase.firestore();
  const usersCollection = DB.collection('users');

  export {
      firebase,
      usersCollection
  }