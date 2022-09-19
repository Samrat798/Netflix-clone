import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBrpD2msLgleoGPxmrU35Dkg8Bfi7nB5Y",
  authDomain: "netflix-clone-8be69.firebaseapp.com",
  projectId: "netflix-clone-8be69",
  storageBucket: "netflix-clone-8be69.appspot.com",
  messagingSenderId: "357655634912",
  appId: "1:357655634912:web:277b44ab7b9f31aa978185",
  measurementId: "G-M0L0E1EXQR",
};

const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
