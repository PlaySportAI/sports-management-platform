import React from 'react';
import { useAuth } from '../context/AuthContext';

const TestAuthPage: React.FC = () => {
  const { currentUser } = useAuth();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-sports-blue mb-4">Auth Debug</h2>
      <pre className="bg-gray-100 p-4 rounded text-sports-black">
        {JSON.stringify({ currentUser }, null, 2)}
      </pre>
    </div>
  );
};

export default TestAuthPage;
