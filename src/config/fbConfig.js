import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCjJCva0qSIqLu6vCOgwUNBEhlpTMXpi7Q",
    authDomain: "zaio-becoming-elite.firebaseapp.com",
    databaseURL: "https://zaio-becoming-elite.firebaseio.com",
    projectId: "zaio-becoming-elite",
    storageBucket: "zaio-becoming-elite.appspot.com",
    messagingSenderId: "746560252593",
    appId: "1:746560252593:web:0b11e9310c3d40a13b1090",
    measurementId: "G-1G4BE0MSYQ"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;