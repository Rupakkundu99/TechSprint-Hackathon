
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your actual Firebase project configuration
// Get these from Firebase Console -> Project Settings -> General -> Your apps
// Click "SDK setup and configuration" -> "Config"
const firebaseConfig = {
  apiKey: "AIzaSyCCMQeM5Cu6UFGWuBlVYv78LTgzI0iIlKQ",
  authDomain: "snapmind1.firebaseapp.com",
  projectId: "snapmind1",
  storageBucket: "snapmind1.firebasestorage.app",
  messagingSenderId: "618573611124",
  appId: "1:618573611124:web:29a44a618be75fc919d121",
  measurementId: "G-KTD9P92QY7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
