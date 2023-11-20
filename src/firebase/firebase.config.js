// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJWidrASTQJvSkfYy3R21gx8IxMbU0cAY",
  authDomain: "auth-moha-milon-c14e2.firebaseapp.com",
  projectId: "auth-moha-milon-c14e2",
  storageBucket: "auth-moha-milon-c14e2.appspot.com",
  messagingSenderId: "1055266501269",
  appId: "1:1055266501269:web:127b24f93d031cdf20219c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;