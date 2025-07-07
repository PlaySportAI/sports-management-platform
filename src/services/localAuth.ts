import { useState } from 'react';

// Mock user data
let currentUser = {
  email: 'test@example.com',
  uid: 'local-user-123',
  token: 'mock-jwt-token'
};

export const signInWithEmail = (email: string, password: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (email === 'test@example.com' && password === 'password123') {
      resolve(currentUser);
    } else {
      reject(new Error('Invalid email or password'));
    }
  });
};

export const signOut = () => {
  currentUser = null;
};

export const onAuthStateChanged = (callback: (user: any) => void) => {
  callback(currentUser);
};
