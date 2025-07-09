import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardHome from './pages/DashboardHome';
import DashboardLayout from './components/DashboardLayout';

// Import fallback-ready auth
import { onAuthStateChanged } from './utils/authSwitcher';

function App() {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute currentUser={currentUser}>
              <DashboardLayout>
                <DashboardHome />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/calendar"
          element={
            <PrivateRoute currentUser={currentUser}>
              <DashboardLayout>
                <CalendarPage />
              </DashboardLayout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

// Simple private route wrapper
const PrivateRoute: React.FC<{ currentUser: any; children: React.ReactNode }> = ({ currentUser, children }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default App;
