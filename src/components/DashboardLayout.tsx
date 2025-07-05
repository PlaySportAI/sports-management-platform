import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-sports-blue-35 font-sans">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-sports-blue p-4 text-white flex flex-col space-y-6">
        <h1 className="text-xl font-bold">PlaySportAI</h1>
        <nav className="flex flex-col space-y-4">
          <a href="/" className="hover:text-sports-red transition duration-200">Dashboard</a>
          <a href="/events" className="hover:text-sports-red transition duration-200">Events</a>
          <a href="/teams" className="hover:text-sports-red transition duration-200">Teams</a>
          <a href="/calendar" className="hover:text-sports-red transition duration-200">Calendar</a>
          <a href="/referees" className="hover:text-sports-red transition duration-200">Referees</a>
          <a href="/settings" className="hover:text-sports-red transition duration-200">Settings</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center border-b border-sports-black-35">
          <h2 className="text-lg font-semibold text-sports-black">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-sports-black">Welcome, David</span>
            <button className="text-sm px-3 py-1 bg-sports-red text-white rounded hover:bg-sports-red transition">Logout</button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 bg-white m-4 rounded-lg shadow-md flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
