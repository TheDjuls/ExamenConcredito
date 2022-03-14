import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC1z1l1ZWgV3aEcD7hGYAg6c-r1xqpivHQ",
    authDomain: "concredito-91f2c.firebaseapp.com",
    projectId: "concredito-91f2c",
    storageBucket: "concredito-91f2c.appspot.com",
    messagingSenderId: "161222094255",
    appId: "1:161222094255:web:1cbeb40bfa14c3ffe4935a"
  };

const firebaseInstance = firebase.initializeApp(firebaseConfig);
export default firebaseInstance
