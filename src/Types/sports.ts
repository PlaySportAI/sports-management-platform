import { Team, Venue, Official } from './common';

type ScoringSystem = 'points' | 'time' | 'sets' | 'custom';

export interface SportType {
  id: string;
  name: string;
  scoringType: ScoringSystem;
  teamSize: {
    min: number;
    max: number;
  };
  customRules?: Record<string, any>;
  equipment?: string[];
  officials?: {
    required: string[];
    optional?: string[];
  };
}

export interface Match {
  id: string;
  competitionId: string;
  homeTeam: Team;
  awayTeam: Team;
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
  startTime: Date;
  endTime?: Date;
  venue: Venue;
  score?: Score;
  officials?: Official[];
}

export interface Score {
  home: number | ScoreDetail;
  away: number | ScoreDetail;
  winner?: 'home' | 'away' | 'draw';
}

export interface ScoreDetail {
  sets?: number[];
  points?: number;
  time?: number; // in seconds
  custom?: Record<string, any>;
}