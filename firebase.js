// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC64alNgeEYVaF-pWuoGw63MV8IEv2Z1Oc',
  authDomain: 'maya-local-chat.firebaseapp.com',
  projectId: 'maya-local-chat',
  storageBucket: 'maya-local-chat.appspot.com',
  messagingSenderId: '660495914228',
  appId: '1:660495914228:web:02ed16750f0d355999faa1',
  measurementId: 'G-RVD2BGC2QH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics only if it is supported in the current environment
let analytics;
if (typeof window !== 'undefined' && isSupported()) {
  analytics = getAnalytics(app);
}

// Export the Firestore instance and Analytics
export { db, analytics };