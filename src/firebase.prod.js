import Firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";
// import { seedDataBase } from "./seed";

const firebaseConfig = {
  apiKey: "AIzaSyAsQc_UASWZJ9CzDuOWyuPhEWWxUY4YXlo",
  authDomain: "netflix-ff8c5.firebaseapp.com",
  projectId: "netflix-ff8c5",
  storageBucket: "netflix-ff8c5.appspot.com",
  messagingSenderId: "592717954946",
  appId: "1:592717954946:web:505df4ca2670512559d99b",
};

const firebase = Firebase.initializeApp(firebaseConfig);

// seedDataBase(firebase);

export { firebase };
