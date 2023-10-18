
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIk7saObHpEQkFPeW5_UOY8q5UwqA-nYA",
  authDomain: "shopping-list-app-cf813.firebaseapp.com",
  projectId: "shopping-list-app-cf813",
  storageBucket: "shopping-list-app-cf813.appspot.com",
  messagingSenderId: "228853779833",
  appId: "1:228853779833:web:c06cf535f20b8f581d33a8",
  measurementId: "G-0SR72PPR5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);