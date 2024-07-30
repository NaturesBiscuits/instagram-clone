
import {getAuth} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUZDZLwUNR-I9JlWSJSdfW4cjzrBu6kTY",
  authDomain: "instagram-clone-29080.firebaseapp.com",
  projectId: "instagram-clone-29080",
  storageBucket: "instagram-clone-29080.appspot.com",
  messagingSenderId: "1095858984911",
  appId: "1:1095858984911:web:725c043b945b974c44e4ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();