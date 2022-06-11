// Import the functions you need from the SDKs you need
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACT-iltTuyt-vFtOktSo1EP-JPuBMJJTk",
  authDomain: "clone-rj.firebaseapp.com",
  projectId: "clone-rj",
  storageBucket: "clone-rj.appspot.com",
  messagingSenderId: "458335723622",
  appId: "1:458335723622:web:61757fb5c1231660414da7",
  measurementId: "G-EWX4S76FSW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // const user = res.user;
  
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  db,
  auth,
  analytics,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
