// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Y6cgJRZWcs7M7RoJilz3926DBql4EKM",
  authDomain: "my-ecommerce-b73cd.firebaseapp.com",
  projectId: "my-ecommerce-b73cd",
  storageBucket: "my-ecommerce-b73cd.appspot.com",
  messagingSenderId: "316462505466",
  appId: "1:316462505466:web:adc09f3517028f9c301843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFireBase () { 
    return app
}