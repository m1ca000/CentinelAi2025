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