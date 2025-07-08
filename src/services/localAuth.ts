let currentUser = {
  email: 'test@example.com',
  uid: 'local-user-123'
};

export const signInWithEmail = (email: string, password: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (email === 'test@example.com' && password === 'password123') {
      resolve(currentUser);
    } else {
      reject(new Error('Invalid credentials'));
    }
  });
};

export const signOut = () => {
  currentUser = null;
};

// Return a dummy unsubscribe function
export const onAuthStateChanged = (callback: (user: any) => void) => {
  callback(currentUser);

  // Simulate Firebase's unsubscribe behavior
  return () => {};
};
