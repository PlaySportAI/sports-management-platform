import React, { useState } from 'react';
import { createTournament } from '../lib/api';
import { useNavigate } from 'react-router-dom';
import { SportType } from '../Types/sports';
import { TournamentFormat } from '../Types/tournaments';
import { useAuth } from '../context/AuthContext';

const TournamentCreation: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    sportType: '' as SportType,
    format: '' as TournamentFormat,
    startDate: '',
    endDate: '',
    location: '',
    maxTeams: 0,
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async () => {
    try {
      await createTournament({
        ...formData,
        organizerId: currentUser?.id || '',
        status: 'DRAFT',
        createdAt: new Date(),
        updatedAt: new Date()
      });
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
                  name="sportType"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                >
                  <option value="">Select Sport</option>
                  {Object.values(SportType).map(sport => (
                    <option key={sport} value={sport}>{sport}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Tournament Format</label>
                <select
                  name="format"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                >
                  <option value="">Select Format</option>
                  {Object.values(TournamentFormat).map(format => (
                    <option key={format} value={format}>{format}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-sports-black mb-1">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sports-black mb-1">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                  />
                </div>
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
                  disabled={!formData.name || !formData.sportType || !formData.format}
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
            <h2 className="text-xl font-semibold text-sports-black">Step 2: Tournament Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Maximum Teams</label>
                <input
                  type="number"
                  name="maxTeams"
                  min="2"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Description</label>
                <textarea
                  name="description"
                  rows={4}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                  placeholder="Tournament description and additional information"
                />
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
                  disabled={!formData.maxTeams}
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
            <div className="text-sm text-sports-black opacity-50">Tournament Details</div>
          </div>
          <div className="w-full bg-gray-200 h-1 mb-6">
            <div 
              className="bg-sports-blue h-1" 
              style={{ width: `${(step / 2) * 100}%` }}
            />
          </div>
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default TournamentCreation;
