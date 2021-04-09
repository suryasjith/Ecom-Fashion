import firebase from "firebase/app";
import "firebase/auth";
//<!-- The core Firebase JS SDK is always required and must be listed first -->

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCmwGeGCWRifag0DPY3uPTlY2OirjdHTHc",
    authDomain: "unblok-671b6.firebaseapp.com",
    projectId: "unblok-671b6",
    storageBucket: "unblok-671b6.appspot.com",
    messagingSenderId: "305398188258",
    appId: "1:305398188258:web:1175b507686349f33736bb"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();