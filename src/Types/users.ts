import { Competition } from './competitions';
import { Team } from './common';

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  COMPETITION_ADMIN = 'COMPETITION_ADMIN',
  TEAM_MANAGER = 'TEAM_MANAGER',
  OFFICIAL = 'OFFICIAL',
  PLAYER = 'PLAYER',
  VIEWER = 'VIEWER'
}

// Extensible role metadata for future sub-roles
export interface RoleMetadata {
  parentRole?: UserRole;
  scope?: 'global' | 'competition' | 'team';
  customPermissions?: Permission[];
  restrictions?: Record<string, any>;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  roles: {
    role: UserRole;
    metadata?: RoleMetadata;
    assignedBy?: string; // ID of the user who assigned this role
    assignedAt?: Date;
  }[];
  permissions: Permission[];
  managedCompetitions?: Competition[];
  managedTeams?: Team[];
  profile?: {
    phoneNumber?: string;
    avatar?: string;
    preferredLanguage?: string;
    notifications?: NotificationPreference;
  };
}

export interface Permission {
  resource: 'competition' | 'team' | 'match' | 'player' | 'official' | 'venue';
  actions: ('create' | 'read' | 'update' | 'delete' | 'manage')[];
  conditions?: {
    competitionId?: string;
    teamId?: string;
    scope?: 'global' | 'competition' | 'team';
  };
}

export interface NotificationPreference {
  email: boolean;
  push: boolean;
  types: {
    matchUpdates: boolean;
    teamAnnouncements: boolean;
    competitionAnnouncements: boolean;
    scheduleChanges: boolean;
  };
}