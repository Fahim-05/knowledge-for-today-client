// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeKYcBAhPh8PqJbUPxvPwm9oNwFajCaD8",
  authDomain: "knowledge-for-today.firebaseapp.com",
  projectId: "knowledge-for-today",
  storageBucket: "knowledge-for-today.appspot.com",
  messagingSenderId: "303541614859",
  appId: "1:303541614859:web:ed0437f5a3628d98c94a0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;