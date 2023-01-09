// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCJietqWvAeF541gMhYIC4aTbLkwlBrw8',
  authDomain: 'chat-nextjs-aed03.firebaseapp.com',
  projectId: 'chat-nextjs-aed03',
  storageBucket: 'chat-nextjs-aed03.appspot.com',
  messagingSenderId: '295822489728',
  appId: '1:295822489728:web:99809431cfb9bb91650e65',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// above checks if app is already initialized
// below commented out is the default setupt

// const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
