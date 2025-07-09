import React, { useState } from 'react';
import { createTournament } from '../lib/api';
import { useNavigate } from 'react-router-dom';

const TournamentCreation: React.FC = () => {
  const navigate = useNavigate(); //
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    sport: '',
    date: '',
    location: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
  try {
    await createTournament({
      name: formData.name,
      sport: formData.sport,
      date: formData.date,
      location: formData.location,
      organizer: 'coach-001'
    });

    // Navigate to calendar and reload
    navigate('/calendar');
  } catch (err) {
    alert('Error creating tournament');
  }
};

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-sports-black">Step 1: Basic Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Tournament Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g., Shanghai Tens 2025"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Sport Type</label>
                <select
                  name="sport"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                >
                  <option value="">Select Sport</option>
                  <option value="rugby">Rugby</option>
                  <option value="soccer">Soccer</option>
                  <option value="darts">Darts</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g., Shanghai Stadium"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  disabled={step === 1}
                  className="bg-sports-red hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-200"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  disabled={!formData.name || !formData.sport}
                  className="bg-sports-blue hover:bg-sports-red text-white py-2 px-4 rounded-md transition duration-200"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-sports-black">Step 2: Optional Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Organizer</label>
                <input
                  type="text"
                  value="David Li"
                  disabled
                  className="w-full px-4 py-2 border border-gray-300 bg-gray-100 rounded-md cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Team Invitations</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue">
                  <option value="">Select Team</option>
                  <option value="team-001">Shanghai Tens U18</option>
                  <option value="team-002">Beijing Darts Juniors</option>
                </select>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="bg-sports-red hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-200"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-sports-blue hover:bg-sports-red text-white py-2 px-6 rounded-md transition duration-200"
                >
                  Create Tournament
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="min-h-screen bg-sports-blue-35 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-sports-blue">Basic Info</div>
            <div className="text-sm text-sports-black opacity-50">Optional Details</div>
          </div>
          <div className="w-full bg-gray-200 h-1 mb-6">
            <div className="bg-sports-blue h-1" style={{ width: '50%' }}></div>
          </div>
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default TournamentCreation;
