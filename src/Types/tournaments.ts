import { Match } from './sports';

export enum TournamentFormat {
  SINGLE_ELIMINATION = 'SINGLE_ELIMINATION',
  DOUBLE_ELIMINATION = 'DOUBLE_ELIMINATION',
  ROUND_ROBIN = 'ROUND_ROBIN',
  GROUP_STAGE_KNOCKOUT = 'GROUP_STAGE_KNOCKOUT',
  SWISS_SYSTEM = 'SWISS_SYSTEM'
}

export interface TournamentStage {
  id: string;
  name: string;
  format: TournamentFormat;
  startDate: Date;
  endDate: Date;
  matches: Match[];
  numberOfParticipants: number;
  isComplete: boolean;
  nextStageId?: string; // For multi-stage tournaments
  previousStageId?: string;
  rules?: {
    qualificationCriteria?: string;
    tiebreakers?: string[];
    pointsForWin?: number;
    pointsForDraw?: number;
    pointsForLoss?: number;
  };
}