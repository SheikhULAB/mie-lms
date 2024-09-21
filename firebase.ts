
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJWhZRFyXl23oHoubOdBPrpkBEU-PFnAw",
  authDomain: "mie-lms.firebaseapp.com",
  projectId: "mie-lms",
  storageBucket: "mie-lms.appspot.com",
  messagingSenderId: "719726475318",
  appId: "1:719726475318:web:73fd649381f05184914097"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);