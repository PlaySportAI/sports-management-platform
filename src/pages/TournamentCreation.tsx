import React, { useState, useEffect } from 'react';

const TournamentCreation: React.FC = () => {
  const [step, setStep] = useState(1);
  useEffect(() => {
  setStep(1);
}, []);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const getStepClass = (stepNum: number) => {
    return step >= stepNum ? 'text-sports-blue text-sm' : 'text-sports-black opacity-50 text-sm';
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-sports-black">Step 1: Select Setup Mode</h2>
            <p className="text-sports-black">Choose how you'd like to configure your tournament.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setStep(2)}
                className="bg-sports-blue hover:bg-sports-red text-white p-4 rounded-lg shadow-md transition"
              >
                <strong>Quick Setup</strong>
                <p className="mt-2 text-sm text-white opacity-90">
                  Minimal input fields. Default values for advanced settings.
                </p>
              </button>

              <button
                onClick={() => setStep(3)}
                className="bg-sports-black hover:bg-sports-black-75 text-white p-4 rounded-lg shadow-md transition"
              >
                <strong>Advanced Setup</strong>
                <p className="mt-2 text-sm text-white opacity-90">
                  Full customization of all tournament details.
                </p>
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-sports-black">Step 2: Basic Tournament Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Tournament Name</label>
                <input
                  type="text"
                  placeholder="e.g., Shanghai Tens 2025"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Sport Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue">
                  <option value="">Select Sport</option>
                  <option value="rugby">Rugby</option>
                  <option value="soccer">Soccer</option>
                  <option value="darts">Darts</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Number of Teams</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue">
                  <option value="">Select Team Count</option>
                  <option value="4">4 Teams</option>
                  <option value="8">8 Teams</option>
                  <option value="16">16 Teams</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Tournament Format</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue">
                  <option value="">Select Format</option>
                  <option value="round-robin">Round Robin</option>
                  <option value="knockout">Knockout</option>
                  <option value="hybrid">Hybrid (Pool + Knockout)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Organizer Information</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-sports-red hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-200"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-sports-blue hover:bg-sports-red text-white py-2 px-4 rounded-md transition duration-200"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-sports-black">Step 3: Seeding Options</h2>
            <div className="space-y-4">
              <div>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="seeding" defaultChecked onChange={() => {}} className="accent-sports-blue" />
                  <span className="text-sports-black">No Seeding (Default)</span>
                </label>
                <p className="ml-6 text-sm text-sports-black">Teams are placed randomly in pools or brackets.</p>
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="seeding" onChange={() => {}} className="accent-sports-blue" />
                  <span className="text-sports-black">Manual Seeding</span>
                </label>
                <p className="ml-6 text-sm text-sports-black">Assign teams manually to specific pools or bracket positions.</p>
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="seeding" onChange={() => {}} className="accent-sports-blue" />
                  <span className="text-sports-black">Automatic Seeding</span>
                </label>
                <p className="ml-6 text-sm text-sports-black">Teams seeded based on rankings when they join.</p>
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="seeding" onChange={() => {}} className="accent-sports-blue" />
                  <span className="text-sports-black">Hybrid Seeding</span>
                </label>
                <p className="ml-6 text-sm text-sports-black">Manually assign some seeds; system fills in the rest automatically.</p>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-sports-red hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-200"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-sports-blue hover:bg-sports-red text-white py-2 px-4 rounded-md transition duration-200"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-sports-black">Step 4: Optional Details</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Dates</label>
                <input
                  type="text"
                  placeholder="e.g., No specific dates"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Venues</label>
                <input
                  type="text"
                  placeholder="Venue details (optional)"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Team Invitations</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue">
                  <option value="">Select Invitation Mode</option>
                  <option value="open">Open Joining</option>
                  <option value="invite">Invite Only</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-sports-black mb-1">Eligibility Criteria</label>
                <input
                  type="text"
                  placeholder="e.g., Minimum players per team"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-sports-red hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-200"
                >
                  Back
                </button>
                <button
                  type="submit"
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
            <div className={getStepClass(1)}>Setup Mode</div>
            <div className={getStepClass(2)}>Basic Info</div>
            <div className={getStepClass(3)}>Seeding</div>
            <div className={getStepClass(4)}>Optional Details</div>
          </div>
          <div className="w-full bg-gray-200 h-1 mb-6">
            <div
              className="bg-sports-blue h-1"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default TournamentCreation;