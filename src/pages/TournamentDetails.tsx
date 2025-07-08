import React from 'react';
import { useParams } from 'react-router-dom';

// Simulated list of tournaments
const mockTournaments = [
  {
    id: '1',
    name: 'Shanghai Tens 2025',
    sport: 'Rugby',
    teams: 8,
    format: 'Round Robin',
    organizer: 'test@example.com',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Beijing Darts Cup',
    sport: 'Darts',
    teams: 4,
    format: 'Knockout',
    organizer: 'test@example.com',
    createdAt: new Date().toISOString()
  }
];

const TournamentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find tournament by ID
  const tournament = mockTournaments.find((t) => t.id === id);

  if (!tournament) {
    return (
      <div className="min-h-screen bg-sports-blue-35 flex items-center justify-center p-6">
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full text-center">
          <h2 className="text-xl font-bold text-sports-black mb-4">Tournament Not Found</h2>
          <p className="text-sports-black mb-6">The tournament may not exist or hasn't been created yet.</p>
          <button
            onClick={() => window.history.back()}
            className="bg-sports-red hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sports-blue-35 p-6">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-sports-black mb-4">{tournament.name}</h1>
        <div className="space-y-2">
          <p><strong>Sport:</strong> {tournament.sport}</p>
          <p><strong>Teams:</strong> {tournament.teams}</p>
          <p><strong>Format:</strong> {tournament.format}</p>
          <p><strong>Organizer:</strong> {tournament.organizer}</p>
          <p><strong>Created At:</strong> {new Date(tournament.createdAt).toLocaleDateString()}</p>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="bg-sports-blue hover:bg-sports-red text-white py-2 px-4 rounded-md transition duration-200">
            Edit
          </button>
          <button className="bg-sports-red hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-200">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetails;
