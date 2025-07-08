import React, { useState } from 'react';
import {
  auth as firebaseAuth,
  signInWithEmailAndPassword as firebaseSignIn,
  signOut as firebaseSignOut,
  onAuthStateChanged as firebaseOnAuthStateChanged
} from '../services/firebase';

import {
  signInWithEmail as localSignIn,
  signOut as localSignOut,
  onAuthStateChanged as localOnAuthStateChanged
} from '../services/localAuth';

// Set to true for testing in China
const USE_LOCAL_AUTH = false;

export const auth = USE_LOCAL_AUTH ? {
  signInWithEmailAndPassword: localSignIn,
  signOut: localSignOut
} : {
  signInWithEmailAndPassword: firebaseSignIn,
  signOut: firebaseSignOut
};

export const onAuthStateChanged = USE_LOCAL_AUTH
  ? localOnAuthStateChanged
  : firebaseOnAuthStateChanged;
