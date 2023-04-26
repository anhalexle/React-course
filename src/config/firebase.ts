// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc0sZKoVRXvgDq0Oem7aLAZSg5nv5myXE",
  authDomain: "reactcourse-d02b2.firebaseapp.com",
  projectId: "reactcourse-d02b2",
  storageBucket: "reactcourse-d02b2.appspot.com",
  messagingSenderId: "894986297891",
  appId: "1:894986297891:web:03f138b25f61ebfbacc796",
  measurementId: "G-LW01EZVMWV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
