// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "easy-estate-ba1ad.firebaseapp.com",
  projectId: "easy-estate-ba1ad",
  storageBucket: "easy-estate-ba1ad.appspot.com",
  messagingSenderId: "614185241189",
  appId: "1:614185241189:web:a0d2332a891794efa1548c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);