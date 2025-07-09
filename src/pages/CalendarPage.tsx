import React, { useEffect, useState } from 'react';
import { getTournaments } from '../lib/api';

interface Event {
  id: string;
  name: string;
  sport: string;
  date: string;
  location: string;
  organizer: string;
}

const CalendarPage: React.FC = () => {
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();

  // Filters
  const [sportFilter, setSportFilter] = useState<string>('');
  const [locationFilter, setLocationFilter] = useState<string>('');

  const [events, setEvents] = useState<Event[]>([]);

  // Load tournaments on mount
  useEffect(() => {
    const loadEvents = async () => {
      const tournaments = await getTournaments();
      setEvents(
        tournaments.map(t => ({
          id: t.id,
          name: t.name,
          sport: t.sport,
          date: t.date,
          location: t.location,
          organizer: t.organizer
        }))
      );
    };

    loadEvents();
  }, []);

  // Group events by day
  const eventsByDate: Record<string, Event[]> = {};
  const filteredEvents = events.filter(event => {
    return (
      (!sportFilter || event.sport === sportFilter) &&
      (!locationFilter || event.location.includes(locationFilter))
    );
  });

  filteredEvents.forEach(event => {
    const day = event.date.split('-')[2];
    if (!eventsByDate[day]) {
      eventsByDate[day] = [];
    }
    eventsByDate[day].push(event);
  });

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
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sports-blue"
          >
            <option value="">All Locations</option>
            <option value="Shanghai">Shanghai</option>
            <option value="Beijing">Beijing</option>
            <option value="Hangzhou">Hangzhou</option>
          </select>

          <button
            onClick={() => {
              setSportFilter('');
              setLocationFilter('');
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

          {/* Render days */}
          {Array.from({ length: new Date(currentYear, today.getMonth() + 1, 0).getDate() }).map((_, i) => {
            const day = i + 1;
            const dayStr = day.toString().padStart(2, '0');
            const hasEvent = eventsByDate[dayStr]?.length > 0;

            return (
              <div key={day} className="border border-gray-200 p-2 min-h-24">
                <div className={hasEvent ? 'text-sports-blue font-semibold' : ''}>{day}</div>
                {hasEvent && (
                  <ul className="mt-1 space-y-1">
                    {eventsByDate[dayStr].map(event => (
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
