import { v4 as uuidv4 } from 'uuid';

// Define models
export interface Tournament {
  id: string;
  name: string;
  sport: string;
  date: string;
  location: string;
  organizer: string;
  teamsRegistered: string[];
  status: 'upcoming' | 'in-progress' | 'completed';
}

// Mock tournaments
let mockTournaments = [
  {
    id: uuidv4(),
    name: "Shanghai Tens",
    sport: "Rugby",
    date: "2025-07-10",
    location: "Pudong Stadium",
    organizer: "coach-001",
    teamsRegistered: [],
    status: "upcoming" as const
  },
  {
    id: uuidv4(),
    name: "Beijing Darts Cup",
    sport: "Darts",
    date: "2025-07-12",
    location: "Beijing Arena",
    organizer: "coach-002",
    teamsRegistered: [],
    status: "upcoming" as const
  }
];

// Get all tournaments
export const getTournaments = async (): Promise<Tournament[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockTournaments]), 300);
  });
};

// Create tournament
export const createTournament = async (
  data: Omit<Tournament, 'id' | 'teamsRegistered' | 'status'>
): Promise<Tournament> => {
  await new Promise(resolve => setTimeout(resolve, 300));

  const newTournament: Tournament = {
    id: uuidv4(),
    ...data,
    teamsRegistered: [],
    status: 'upcoming'
  };

  mockTournaments.push(newTournament);

  return newTournament;
};
