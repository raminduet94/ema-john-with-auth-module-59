// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5oFC-KIQG7UOMXbZ6sZ2vqJYwKYiAwg4",
    authDomain: "ema-john-simple-4c93d.firebaseapp.com",
    projectId: "ema-john-simple-4c93d",
    storageBucket: "ema-john-simple-4c93d.appspot.com",
    messagingSenderId: "875504061941",
    appId: "1:875504061941:web:3dccd8a84ff352e9f8e4bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;