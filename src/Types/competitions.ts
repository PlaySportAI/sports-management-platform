import { SportType } from './sports';
import { Team, Venue, Official } from './common';
import { TournamentStage, TournamentFormat } from './tournaments';

export interface Competition {
  id: string;
  name: string;
  description?: string;
  sportType: SportType;
  organizer: {
    id: string;
    name: string;
    contact: string;
  };
  startDate: Date;
  endDate: Date;
  registrationDeadline: Date;
  status: 'DRAFT' | 'PUBLISHED' | 'REGISTRATION_OPEN' | 'REGISTRATION_CLOSED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  venues: Venue[];
  teams: Team[];
  officials: Official[];
  tournamentFormat: TournamentFormat;
  stages: TournamentStage[];
  rules: {
    minTeams: number;
    maxTeams: number;
    minPlayersPerTeam: number;
    maxPlayersPerTeam: number;
    customRules?: string[];
  };
  prizes?: {
    rank: number;
    description: string;
    value?: number;
  }[];
  metadata?: Record<string, unknown>;
}