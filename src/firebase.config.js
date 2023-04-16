// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiZu7ocn_J__N4WSgbU2vtMrgunMmW5jU",
  authDomain: "dimple-firebase-8ff6f.firebaseapp.com",
  projectId: "dimple-firebase-8ff6f",
  storageBucket: "dimple-firebase-8ff6f.appspot.com",
  messagingSenderId: "781723362612",
  appId: "1:781723362612:web:9618d9682af6bd001d7161",
  measurementId: "G-4D7HXR5F46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;