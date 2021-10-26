// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHaCDR2WdvDU_9O9RPIEcCaKR8woXp7aQ",
  authDomain: "lujam-jersey.firebaseapp.com",
  projectId: "lujam-jersey",
  storageBucket: "lujam-jersey.appspot.com",
  messagingSenderId: "1059528284755",
  appId: "1:1059528284755:web:8f7e58d8142ffaa96dc4a6",
  measurementId: "G-087VJ36818",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const auth = getAuth();
