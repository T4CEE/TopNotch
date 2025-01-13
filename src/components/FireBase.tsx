// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHjqHjcXuGFwFhrPWco1TAC-wj9a6wa3E",
  authDomain: "disasterassistance-b480a.firebaseapp.com",
  projectId: "disasterassistance-b480a",
  storageBucket: "disasterassistance-b480a.firebasestorage.app",
  messagingSenderId: "545310784403",
  appId: "1:545310784403:web:4f31a5658c1fe1bed48666"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);