import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages
import LoginPage from './pages/LoginPage';
import DashboardHome from './pages/DashboardHome';
import TournamentCreation from './pages/TournamentCreation';
import TeamManagement from './pages/TeamManagement';
import CalendarPage from './pages/CalendarPage'; // ✅ Import added

// Components
import DashboardLayout from './components/DashboardLayout';

// Auth
import { useAuth } from './context/AuthContext';

function App() {
  const { currentUser } = useAuth();

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
          path="/create-tournament"
          element={
            <PrivateRoute currentUser={currentUser}>
              <DashboardLayout>
                <TournamentCreation />
              </DashboardLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/team-management"
          element={
            <PrivateRoute currentUser={currentUser}>
              <DashboardLayout>
                <TeamManagement />
              </DashboardLayout>
            </PrivateRoute>
          }
        />

        {/* ✅ Add this new route */}
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

// Private route wrapper
const PrivateRoute: React.FC<{ currentUser: any; children: React.ReactNode }> = ({ currentUser, children }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default App;
