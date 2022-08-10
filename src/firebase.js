import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-dbe8c.firebaseapp.com",
  projectId: "tutorial-dbe8c",
  storageBucket: "tutorial-dbe8c.appspot.com",
  messagingSenderId: "1049439153644",
  appId: "1:1049439153644:web:248daa2e3d2b6ed000a4c9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
