import React, { useState } from 'react';

interface Event {
  id: number;
  name: string;
  sport: string;
  date: string;
  location: {
    region: string;
    city: string;
    district: string;
  };
  ageGroup: string;
}

const mockEvents: Event[] = [
  {
    id: 1,
    name: 'Shanghai Tens 2025',
    sport: 'Rugby',
    ageGroup: 'U18',
    location: {
      region: 'East China',
      city: 'Shanghai',
      district: 'Pudong'
    },
    date: '2025-07-10'
  },
  {
    id: 2,
    name: 'Beijing Darts Cup',
    sport: 'Darts',
    ageGroup: 'Open',
    location: {
      region: 'North China',
      city: 'Beijing',
      district: ''
    },
    date: '2025-07-12'
  }
];

const CalendarPage: React.FC = () => {
  const [sportFilter, setSportFilter] = useState<string>('');
  const [ageGroupFilter, setAgeGroupFilter] = useState<string>('');
  const [regionFilter, setRegionFilter] = useState<string>('');
  const [cityFilter, setCityFilter] = useState<string>('');
  const [districtFilter, setDistrictFilter] = useState<string>('');

  // Apply filters
  const filteredEvents = mockEvents.filter(event => {
    return (
      (!sportFilter || event.sport === sportFilter) &&
      (!ageGroupFilter || event.ageGroup === ageGroupFilter) &&
      (!regionFilter || event.location.region.includes(regionFilter)) &&
      (!cityFilter || event.location.city.includes(cityFilter)) &&
      (!districtFilter || event.location.district.includes(districtFilter))
    );
  });

  return (
    <div className="min-h-screen bg-sports-blue-35 p-6">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-sports-black mb-6">Shared Event Calendar</h1>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <select
            value={sportFilter}
            onChange={(e) => setSportFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
          >
            <option value="">All Sports</option>
            <option value="Rugby">Rugby</option>
            <option value="Soccer">Soccer</option>
            <option value="Darts">Darts</option>
          </select>

          <select
            value={ageGroupFilter}
            onChange={(e) => setAgeGroupFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
          >
            <option value="">All Age Groups</option>
            <option value="U18">U18</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
            <option value="Junior">Junior</option>
          </select>

          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
          >
            <option value="">All Regions</option>
            <option value="East China">East China</option>
            <option value="North China">North China</option>
            <option value="South China">South China</option>
          </select>

          <select
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
          >
            <option value="">All Cities</option>
            <option value="Shanghai">Shanghai</option>
            <option value="Beijing">Beijing</option>
            <option value="Guangzhou">Guangzhou</option>
          </select>

          <select
            value={districtFilter}
            onChange={(e) => setDistrictFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
          >
            <option value="">All Districts</option>
            <option value="Pudong">Pudong</option>
            <option value="Xuhui">Xuhui</option>
            <option value="Chaoyang">Chaoyang</option>
          </select>

          <button
            onClick={() => {
              setSportFilter('');
              setAgeGroupFilter('');
              setRegionFilter('');
              setCityFilter('');
              setDistrictFilter('');
            }}
            className="bg-sports-red hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-200"
          >
            Clear Filters
          </button>
        </div>

        {/* Event List */}
        <div className="space-y-4">
          {filteredEvents.length === 0 && (
            <p className="text-sports-black">No events match your filters.</p>
          )}

          {filteredEvents.map(event => (
            <div key={event.id} className="border border-sports-blue-35 p-4 rounded-md hover:bg-sports-blue-35 transition">
              <h3 className="font-semibold text-sports-black">{event.name}</h3>
              <p className="text-sm text-sports-black">
                <span>Sport: {event.sport}</span> •{' '}
                <span>Age Group: {event.ageGroup}</span> •{' '}
                <span>{event.location.region}, {event.location.city}, {event.location.district}</span> •{' '}
                <span>Date: {event.date}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
