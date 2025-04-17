// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6pNXVqKkARHwuwSnI7aE6aep_SISvQOk",
  authDomain: "portfolio-d58a0.firebaseapp.com",
  projectId: "portfolio-d58a0",
  storageBucket: "portfolio-d58a0.appspot.com",
  messagingSenderId: "67539568920",
  appId: "1:67539568920:web:ed46443725492080d6f66d",
  measurementId: "G-6YCTBTJXYS",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export default app;
