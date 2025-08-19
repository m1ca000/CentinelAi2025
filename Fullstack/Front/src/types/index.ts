export interface Device {
  id: number;
  name: string;
  type: 'camera' | 'turnstile';
  active: boolean;
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
  status: 'active' | 'restricted';
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface AuthContextType {
  user: AuthUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}