

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkfN5ahNET0114_4ppORQExAfslTSoE9A",
  authDomain: "coffeehouse-52837.firebaseapp.com",
  projectId: "coffeehouse-52837",
  storageBucket: "coffeehouse-52837.appspot.com",
  messagingSenderId: "485458642204",
  appId: "1:485458642204:web:6e8ae0b520ceabb27626d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;





















