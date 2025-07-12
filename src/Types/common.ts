export interface Team {
  id: string;
  name: string;
  logo?: string;
  players: Player[];
  coach?: Staff;
  manager?: Staff;
  contact: Contact;
  division?: string;
}

export interface Player {
  id: string;
  name: string;
  dateOfBirth: Date;
  gender?: string;
  number?: string;
  position?: string;
  status: 'active' | 'injured' | 'suspended' | 'inactive';
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  contact: Contact;
}

export interface Contact {
  email: string;
  phone?: string;
  address?: string;
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  facilities?: string[];
  capacity?: number;
}

export interface Official {
  id: string;
  name: string;
  role: string;
  certifications?: string[];
  contact: Contact;
}