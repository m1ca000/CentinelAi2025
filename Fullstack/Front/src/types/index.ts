export interface Device {
  id: number;
  name: string;
  type: 'camera' | 'turnstile';
  active:  'active' | 'inactive';
}

export interface ActivityEntry {
  id: number;
  personName: string;
  timestamp: Date;
  action: 'entry' | 'exit';
}

export interface User {
  id: number;
  name: string;
  surname: string;
  status: 'authorized' | 'restricted';
  photo?: string;
}

export interface NewUser {
  name: string;
  surname: string;
  status: 'authorized' | 'restricted';
  photo?: File | null;
}

export interface AuthUser {
  name: string;
  email: string;
  hasInstitution: boolean;
  institutionID?: string;
}

export interface Institution {
  id: number;
  name: string;
}

export interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  createInstitution: (institution: { name: string; address: string; phone: string; type: string; }) => Promise<boolean>;
  loadingAuth: boolean;
}