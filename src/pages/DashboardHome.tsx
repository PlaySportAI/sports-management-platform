import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardHome: React.FC = () => {
  const navigate = useNavigate();

  const mockTournaments = [
    {
      id: '1',
      name: 'Shanghai Tens 2025',
      sport: 'Rugby',
      teams: 8,
      format: 'Round Robin'
    },
    {
      id: '2',
      name: 'Beijing Darts Cup',
      sport: 'Darts',
      teams: 4,
      format: 'Knockout'
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-sports-black mb-6">Your Tournaments</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTournaments.map((t) => (
          <div
            key={t.id}
            onClick={() => navigate(`/tournament/${t.id}`)}
            className="bg-white p-4 rounded-lg shadow-md border border-sports-blue-35 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-sports-black">{t.name}</h3>
            <p className="text-sm text-sports-black">Sport: {t.sport}</p>
            <p className="text-sm text-sports-black">Teams: {t.teams}</p>
            <p className="text-sm text-sports-black">Format: {t.format}</p>
          <button
          onClick={() => navigate('/tournament/1')}
          className="text-sm mt-4 text-sports-blue hover:text-sports-red"
        >
          View Shanghai Tens 2025
        </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;
