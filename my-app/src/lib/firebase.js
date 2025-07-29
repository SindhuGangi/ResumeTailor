// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqVvzdhE9auyvTLRWAvPaz2cSN6FMe5Jc",
  authDomain: "resumetailor-c45b9.firebaseapp.com",
  projectId: "resumetailor-c45b9",
  storageBucket: "resumetailor-c45b9.firebasestorage.app",
  messagingSenderId: "98364484898",
  appId: "1:98364484898:web:ddb799efb07c294e83897b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
