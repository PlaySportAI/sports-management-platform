import { useState, useEffect } from 'react';
import {
  signInWithEmail as localSignIn,
  signOut as localSignOut,
  onAuthStateChanged as localOnAuthStateChanged
} from '../services/localAuth';

// Set to true to use local mock auth (for China)
const USE_LOCAL_AUTH = true;

export const auth = USE_LOCAL_AUTH ? {
  signInWithEmailAndPassword: localSignIn,
  signOut: localSignOut
} : {
  signInWithEmailAndPassword: (email: string, password: string) => {
    // Later: replace with real API call to your backend
    return Promise.reject("Firebase not available");
  },
  signOut: () => Promise.resolve()
};

export const onAuthStateChanged = localOnAuthStateChanged;
