// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRCysJozP4sXUI8fgXS4SKBN8qV-wQaN0",
  authDomain: "journal-app-jony.firebaseapp.com",
  projectId: "journal-app-jony",
  storageBucket: "journal-app-jony.appspot.com",
  messagingSenderId: "689636111040",
  appId: "1:689636111040:web:b6584e7d546f9517693325"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);