// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc0kUik1fvN8J2E1X7RjPHdzhzlRpLOQI",
  authDomain: "focusandjoy.firebaseapp.com",
  projectId: "focusandjoy",
  storageBucket: "focusandjoy.firebasestorage.app",
  messagingSenderId: "632326716827",
  appId: "1:632326716827:web:3c43a40c84a76a21bb353e",
  measurementId: "G-E9W3F4442V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);