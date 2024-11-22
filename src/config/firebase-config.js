
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzJZltL5GCNPVCo3GQyltBtBpqar9CHMA",
  authDomain: "tigers-monkeys.firebaseapp.com",
  projectId: "tigers-monkeys",
  storageBucket: "tigers-monkeys.appspot.com",
  messagingSenderId: "861624402651",
  appId: "1:861624402651:web:00abc8a0c0cec2b3bf82fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)