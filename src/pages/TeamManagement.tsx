import React, { useState } from 'react';

const TeamManagement: React.FC = () => {
  const [teams, setTeams] = useState<any[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const text = event.target?.result as string;
      const rows = text.split('\n').map(row => row.split(','));

      // Extract headers
      const headers = rows[0];
      const data = rows.slice(1).map(row => {
        const obj: any = {};
        headers.forEach((header, index) => {
          obj[header.trim()] = row[index]?.trim();
        });
        return obj;
      });

      setTeams(data);
    };

    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-sports-blue-35 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full">
        <h2 className="text-2xl font-bold text-sports-black mb-6">Team & Player Management</h2>

        <div className="mb-6">
          <p className="text-sports-black mb-2">Upload a CSV file with team details:</p>
          <input type="file" accept=".csv,.xlsx,.xls" onChange={handleFileUpload} />
        </div>

        {teams.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-sports-blue-75 text-white">
                <tr>
                  {Object.keys(teams[0] || {}).map((key, idx) => (
                    <th key={idx} className="px-4 py-2 text-left text-sm font-semibold">{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-sports-blue-35">
                {teams.map((team, idx) => (
                  <tr key={idx} className="hover:bg-sports-blue-35 transition">
                    {Object.values(team).map((value: any, i) => (
                      <td key={i} className="px-4 py-2 whitespace-nowrap text-sports-black">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-8">
          <button
            onClick={() => alert('Coming soon: Export teams to CSV')}
            className="bg-sports-red hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-200"
          >
            Export Teams
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
