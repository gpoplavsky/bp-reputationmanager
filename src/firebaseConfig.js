import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "bp-reputationmanager.firebaseapp.com",
    projectId: "bp-reputationmanager",
    storageBucket: "bp-reputationmanager.appspot.com",
    messagingSenderId: "1001628843747",
    appId: "1:1001628843747:web:90f0a12081bb5a837d0fd6",
    measurementId: "G-6Q34FTNYSS"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore y Functions
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, functions };