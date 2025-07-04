import React from 'react';

const TailwindTest: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sports-blue-35 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-sports-blue">Tailwind Color Test</h1>

        {/* Sports Blue */}
        <div className="p-4 bg-sports-blue text-white rounded shadow">
          sports-blue (Primary) - #0236F2
        </div>
        <div className="p-4 bg-sports-blue-75 text-sports-black rounded shadow">
          sports-blue-75 (Secondary) - #5467AB
        </div>
        <div className="p-4 bg-sports-blue-35 text-sports-black rounded shadow">
          sports-blue-35 (Tertiary) - #AFB3D9
        </div>

        {/* Sports Red */}
        <div className="p-4 bg-sports-red text-white rounded shadow">
          sports-red (Primary) - #C50212
        </div>
        <div className="p-4 bg-sports-red-75 text-sports-black rounded shadow">
          sports-red-75 (Secondary) - #CC5441
        </div>
        <div className="p-4 bg-sports-red-35 text-sports-black rounded shadow">
          sports-red-35 (Tertiary) - #E8B09E
        </div>

        {/* Sports Black */}
        <div className="p-4 bg-sports-black text-white rounded shadow">
          sports-black (Primary) - #222221
        </div>
        <div className="p-4 bg-sports-black-75 text-sports-black rounded shadow">
          sports-black-75 (Secondary) - #585657
        </div>
        <div className="p-4 bg-sports-black-35 text-sports-black rounded shadow">
          sports-black-35 (Tertiary) - #B1B1B1
        </div>
      </div>
    </div>
  );
};

export default TailwindTest;
