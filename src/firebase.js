// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7cYAyNAtQqKM5wPuGghusXFXC22BDn4I",
    authDomain: "twitter-clone-65aaa.firebaseapp.com",
    projectId: "twitter-clone-65aaa",
    storageBucket: "twitter-clone-65aaa.appspot.com",
    messagingSenderId: "662437104824",
    appId: "1:662437104824:web:e38f4d18ae978627ecb84d",
    measurementId: "G-XBGQTMCRCS"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();


export default db;