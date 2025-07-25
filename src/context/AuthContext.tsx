import React, { createContext, useContext, useState } from 'react';
import { User, UserRole } from '../Types/users';

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
  // Simulate logged-in user with basic role
  const [currentUser] = useState<User | null>({
    id: 'local-user-123',
    email: 'test@example.com',
    displayName: 'Test User',
    roles: [{
      role: UserRole.VIEWER,
      assignedAt: new Date(),
    }],
    permissions: [{
      resource: 'competition',
      actions: ['read'],
      conditions: { scope: 'global' }
    }],
    profile: {
      notifications: {
        email: true,
        push: true,
        types: {
          matchUpdates: true,
          teamAnnouncements: true,
          competitionAnnouncements: true,
          scheduleChanges: true
        }
      }
    }
  });

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};