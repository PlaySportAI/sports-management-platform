import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-sports-blue-35 font-sans">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-sports-blue p-4 text-white flex flex-col space-y-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <img src="/img/logo.png" alt="PlaySportAI Logo" className="h-8 mb-4" />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-4">
          <a href="/" className="hover:text-sports-red transition duration-200">Dashboard</a>
          <a href="/create-tournament" className="hover:text-sports-red transition duration-200">Create Tournament</a>
          <a href="/team-management" className="hover:text-sports-red transition duration-200">Team Management</a>
          <a href="/events" className="hover:text-sports-red transition duration-200">Events</a>
          <a href="/referees" className="hover:text-sports-red transition duration-200">Referees</a>
          <a href="/settings" className="hover:text-sports-red transition duration-200">Settings</a>
          <a href="/calendar" className="hover:text-sports-red transition duration-200">Event Calendar</a>
       </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
