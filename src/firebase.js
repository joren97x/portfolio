// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKnjsmABwvNU9UbThxquIdTzt2Gi1FpXA",
  authDomain: "portfolio-b307e.firebaseapp.com",
  projectId: "portfolio-b307e",
  storageBucket: "portfolio-b307e.appspot.com",
  messagingSenderId: "543518048343",
  appId: "1:543518048343:web:ae2566f338d7443147e312",
  measurementId: "G-ZEZDYZHCLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }