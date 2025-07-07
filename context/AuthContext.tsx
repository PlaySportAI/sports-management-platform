import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';

interface AuthContextType {
  currentUser: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
