import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDdPLcHX-KRUhs-Ae2r0upvE9GdipYIjN0",
  authDomain: "fir-login-a838b.firebaseapp.com",
  projectId: "fir-login-a838b",
  storageBucket: "fir-login-a838b.appspot.com",
  messagingSenderId: "417118220855",
  appId: "1:417118220855:web:163ec4b5f8805fc75cc5b2",
  measurementId: "G-7WMSRMV1LV"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);

