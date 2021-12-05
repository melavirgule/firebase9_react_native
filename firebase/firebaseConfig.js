import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Config Authentication
const firebaseConfig = {
  apiKey: "AIzaSyA77LHKEAlbYZJuSnz0Jg5paF6ch7RcXAw",
  authDomain: "test-firebase9-7f5e5.firebaseapp.com",
  projectId: "test-firebase9-7f5e5",
  storageBucket: "test-firebase9-7f5e5.appspot.com",
  messagingSenderId: "459629456796",
  appId: "1:459629456796:web:dd289fb012933aa2112c59",
};

// Initialize firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

// Initialize services
export const db = getFirestore(app);

