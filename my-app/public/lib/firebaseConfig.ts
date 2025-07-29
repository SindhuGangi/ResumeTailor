// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqVvzdhE9auyvTLRWAvPaz2cSN6FMe5Jc",
  authDomain: "resumetailor-c45b9.firebaseapp.com",
  projectId: "resumetailor-c45b9",
  storageBucket: "resumetailor-c45b9.firebasestorage.app",
  messagingSenderId: "98364484898",
  appId: "1:98364484898:web:ddb799efb07c294e83897b",
  measurementId: "G-2F6Y3KR2S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };