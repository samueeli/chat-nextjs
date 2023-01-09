// Import the functions you need from the SDKs you need
import { initializeApp, apps } from 'firebase/app';
import firebase from 'firebase';
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
const app = !apps.length ? initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
