// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDMQWAPRxI5RaEw4asLOaDuI7QuEkFtqv8",
  authDomain: "netflix-clone-675fd.firebaseapp.com",
  projectId: "netflix-clone-675fd",
  storageBucket: "netflix-clone-675fd.appspot.com",
  messagingSenderId: "640673405237",
  appId: "1:640673405237:web:145150d83f54b7c1de547c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
