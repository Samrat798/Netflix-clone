// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDGb2cvV5i3hdwhWNBt52u3hCa-Q0XVm58",
  authDomain: "netflix-clone-bbad9.firebaseapp.com",
  projectId: "netflix-clone-bbad9",
  storageBucket: "netflix-clone-bbad9.appspot.com",
  messagingSenderId: "490537556058",
  appId: "1:490537556058:web:8e5c9685100720096ba063",
  measurementId: "G-16ZN588SLB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
