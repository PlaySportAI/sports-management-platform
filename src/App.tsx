import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LoginPage from './pages/LoginPage';
import DashboardHome from './pages/DashboardHome';

// Components
import DashboardLayout from './components/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
