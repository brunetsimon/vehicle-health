import firebase from 'firebase'

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyAyXz2HwHbXhOx-Wp7uBEAzwiDgoMS5rdY",
  authDomain: "idtc-47cf5.firebaseapp.com",
  databaseURL: "https://idtc-47cf5.firebaseio.com",
  projectId: "idtc-47cf5",
  storageBucket: "idtc-47cf5.appspot.com",
  messagingSenderId: "266995343530"
};

var fire = firebase.initializeApp(config);
export default fire;