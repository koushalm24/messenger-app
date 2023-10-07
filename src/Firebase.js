import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBSYVSuKR3dtplqq4lDSJOJ_bSIJHzsEow",
  authDomain: "messenger-app-4301.firebaseapp.com",
  projectId: "messenger-app-4301",
  storageBucket: "messenger-app-4301.appspot.com",
  messagingSenderId: "952181656498",
  appId: "1:952181656498:web:257955955fa610545eb2ab"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
