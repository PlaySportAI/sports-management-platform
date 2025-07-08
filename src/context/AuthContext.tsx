import React, { createContext, useContext, useState } from 'react';

// Define user type
interface User {
  email: string;
  uid: string;
}

interface AuthContextType {
  currentUser: User | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Simulate logged-in user
  const [currentUser] = useState<User | null>({
    email: 'test@example.com',
    uid: 'local-user-123'
  });

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
