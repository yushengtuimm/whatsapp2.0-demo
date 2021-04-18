import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY3TyBaRFR951ZvKVE-oGCOIc-J1h0eQ8",
  authDomain: "endless-phoenix-301900.firebaseapp.com",
  projectId: "endless-phoenix-301900",
  storageBucket: "endless-phoenix-301900.appspot.com",
  messagingSenderId: "654142085112",
  appId: "1:654142085112:web:aef025472929223260a80d",
  measurementId: "G-C2VX6FFEV5",
};

// If SSR firebase not initalize, then initialize firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebase.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
