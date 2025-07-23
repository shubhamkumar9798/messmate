// firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase config stays the same
const firebaseConfig = {
  apiKey: "AIzaSyDxfsFROI5pu3nSBV2L96_87NPgmBO6EDU",
  authDomain: "messmate-694a9.firebaseapp.com",
  projectId: "messmate-694a9",
  storageBucket: "messmate-694a9.firebasestorage.app",
  messagingSenderId: "163814764733",
  appId: "1:163814764733:web:3a2d77d02514658fde07d4",
  measurementId: "G-PRRD119MB8"
};

// ✅ Properly initialize the app only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Export auth and db instances
export const auth = getAuth(app);
export const db = getFirestore(app);
