// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjSk6UQxolNXqxDT46BbJd2nFaFWd54Mk",
  authDomain: "emajon-firebase.firebaseapp.com",
  projectId: "emajon-firebase",
  storageBucket: "emajon-firebase.appspot.com",
  messagingSenderId: "570377230986",
  appId: "1:570377230986:web:a03f0a812ce5155f5d6b73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
