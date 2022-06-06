// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACT-iltTuyt-vFtOktSo1EP-JPuBMJJTk",
  authDomain: "clone-rj.firebaseapp.com",
  projectId: "clone-rj",
  storageBucket: "clone-rj.appspot.com",
  messagingSenderId: "458335723622",
  appId: "1:458335723622:web:61757fb5c1231660414da7",
  measurementId: "G-EWX4S76FSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);