import React, { useState } from 'react';

interface Event {
  id: number;
  name: string;
  sport: string;
  date: string;
  ageGroup: string;
  location: {
    region: string;
    city: string;
    district?: string;
  };
}

// Mock events data
const mockEvents: Event[] = [
  {
    id: 1,
    name: "Shanghai Tens",
    sport: "Rugby",
    ageGroup: "U18",
    location: {
      region: "East China",
      city: "Shanghai",
      district: "Pudong"
    },
    date: "2025-07-10"
  },
  {
    id: 2,
    name: "Beijing Darts Cup",
    sport: "Darts",
    ageGroup: "Open",
    location: {
      region: "North China",
      city: "Beijing",
      district: ""
    },
    date: "2025-07-12"
  },
  {
    id: 3,
    name: "Hangzhou U18 Soccer",
    sport: "Soccer",
    ageGroup: "U18",
    location: {
      region: "East China",
      city: "Hangzhou",
      district: "Xihu"
    },
    date: "2025-07-15"
  }
];

const CalendarPage: React.FC = () => {
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();

  // Filters
  const [sportFilter, setSportFilter] = useState<string>('');
  const [ageGroupFilter, setAgeGroupFilter] = useState<string>('');
  const [regionFilter, setRegionFilter] = useState<string>('');
  const [cityFilter, setCityFilter] = useState<string>('');
  const [districtFilter, setDistrictFilter] = useState<string>('');

  // Filter events based on selected values
  const filteredEvents = mockEvents.filter(event => {
    return (
      (!sportFilter || event.sport === sportFilter) &&
      (!ageGroupFilter || event.ageGroup === ageGroupFilter) &&
      (!regionFilter || event.location.region.includes(regionFilter)) &&
      (!cityFilter || event.location.city.includes(cityFilter)) &&
      (!districtFilter || (event.location.district && event.location.district.includes(districtFilter)))
    );
  });

  // Group events by date
  const eventsByDate: Record<string, Event[]> = {};
  filteredEvents.forEach(event => {
    const day = event.date.split('-')[2];
    if (!eventsByDate[day]) {
      eventsByDate[day] = [];
    }
    eventsByDate[day].push(event);
  });

  // Generate empty slots before first day of month
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

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
            <option value="Hangzhou">Hangzhou</option>
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
            className="bg-sports-red hover:bg-red-700 text-white px-4 py-2 rounded transition duration-200"
          >
            Clear Filters
          </button>
        </div>

        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-sports-black">{currentMonth} {currentYear}</h2>
          <div className="space-x-2">
            <button className="px-3 py-1 bg-sports-blue text-white rounded hover:bg-sports-red transition">
              Previous
            </button>
            <button className="px-3 py-1 bg-sports-blue text-white rounded hover:bg-sports-red transition">
              Next
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="font-medium text-sports-black">{day}</div>
          ))}

          {/* Empty slots before 1st */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={i}></div>
          ))}

          {/* Render all days */}
          {Array.from({ length: new Date(currentYear, today.getMonth() + 1, 0).getDate() }).map((_, i) => {
            const day = i + 1;
            const hasEvent = eventsByDate[day.toString()]?.length > 0;

            return (
              <div key={day} className="border border-gray-200 p-2 min-h-24">
                <div className={hasEvent ? 'text-sports-blue font-semibold' : ''}>{day}</div>
                {hasEvent && (
                  <ul className="mt-1 space-y-1">
                    {eventsByDate[day.toString()].map(event => (
                      <li key={event.id} className="text-xs bg-sports-blue-35 text-sports-black px-2 py-1 rounded">
                        {event.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
