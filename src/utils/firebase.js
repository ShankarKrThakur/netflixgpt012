// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqKXlIOoLYIJFFMrRaJsfxWCRCKYqMIBc",
  authDomain: "netflixgpt-b852c.firebaseapp.com",
  projectId: "netflixgpt-b852c",
  storageBucket: "netflixgpt-b852c.appspot.com",
  messagingSenderId: "551573778743",
  appId: "1:551573778743:web:6512e66323b283ca74aab2",
  measurementId: "G-GYPM64B7QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();