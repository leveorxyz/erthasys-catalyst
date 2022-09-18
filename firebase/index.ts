// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'erthasys.firebaseapp.com',
  projectId: 'erthasys',
  storageBucket: 'erthasys.appspot.com',
  messagingSenderId: '748004109515',
  appId: '1:748004109515:web:3aaefe294d3f2ae394bf4e',
  measurementId: 'G-D9VLXEWBVL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
