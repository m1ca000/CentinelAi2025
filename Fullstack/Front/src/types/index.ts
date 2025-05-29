export interface Device {
  id: number;
  name: string;
  type: 'camera' | 'turnstile';
  active: boolean;
}