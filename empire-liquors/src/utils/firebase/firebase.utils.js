import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcjsSuh3fmQ4Dg2Ch6G1Suind24ONLjgc",
  authDomain: "reactintrov2.firebaseapp.com",
  projectId: "reactintrov2",
  storageBucket: "reactintrov2.appspot.com",
  messagingSenderId: "576800373559",
  appId: "1:576800373559:web:b9ee1d3c112ef29d0778b2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)