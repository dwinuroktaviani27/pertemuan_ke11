import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNOLekoXJJ3E6ta3fbmVZQVzDUi0Nm7t4",
  authDomain: "pbf-dnoktaviani2022.firebaseapp.com",
  projectId: "pbf-dnoktaviani2022",
  storageBucket: "pbf-dnoktaviani2022.appspot.com",
  messagingSenderId: "762123229290",
  appId: "1:762123229290:web:01b0ddca52ab3b636f9213",
  measurementId: "G-0QWCNQ2YKC",
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
