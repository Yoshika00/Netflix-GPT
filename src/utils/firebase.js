// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdQEqhVVgcpEMqTb59p5v5HBqpg_dW_2I",
  authDomain: "netflixgpt-7858d.firebaseapp.com",
  projectId: "netflixgpt-7858d",
  storageBucket: "netflixgpt-7858d.appspot.com",
  messagingSenderId: "95587366447",
  appId: "1:95587366447:web:7e74c533a7f366f9cd78da",
  measurementId: "G-Y2YQTX1BH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();