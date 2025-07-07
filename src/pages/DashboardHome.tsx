import React from 'react';

const DashboardHome: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-sports-blue mb-4">Welcome to PlaySportAI</h2>
      <p className="text-sports-black mb-6">Manage competitions, teams, referees, and more.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-sports-blue p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
          <p>View and manage upcoming matches and tournaments.</p>
        </div>

        <div className="bg-sports-red p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Team Management</h3>
          <p>Register, edit, and manage sports teams.</p>
        </div>

        <div className="bg-sports-black p-4 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-semibold mb-2">Player & Referee Records</h3>
          <p>Track participation history and performance data.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
