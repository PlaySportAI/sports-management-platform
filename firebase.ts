import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAw9J-_bpuRSe0wyRnxtD45IIDzNWOuAR0",
  authDomain: "playsportai.firebaseapp.com",
  projectId: "playsportai",
  storageBucket: "playsportai.firebasestorage.app",
  messagingSenderId: "175078807160",
  appId: "1:175078807160:web:58d79561e8f2ff5e317f8d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged, signInWithEmailAndPassword, signOut };
