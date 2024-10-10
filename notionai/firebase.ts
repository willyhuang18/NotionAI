// Import the functions you need from the SDKs you need
import { initializeApp,getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKzCsKR-HoTnRBDj-c1ScqKZpFkifoccg",
  authDomain: "notionai-3f029.firebaseapp.com",
  projectId: "notionai-3f029",
  storageBucket: "notionai-3f029.appspot.com",
  messagingSenderId: "78365145094",
  appId: "1:78365145094:web:da4bb9bbea3235a7dc2b87"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db =getFirestore(app);


