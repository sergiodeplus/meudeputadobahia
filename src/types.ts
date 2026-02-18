
export type DeputyStatus = 'preso' | 'investigado' | 'citado' | 'limpo' | 'votou_contra';
export type DeputyType = 'federal' | 'estadual';

export interface Process {
  name: string;
  type: string;
  status: string;
  description: string;
  severity: 'high' | 'medium' | 'low';
}

export interface Vote {
  proposal: string;
  vote: 'SIM' | 'NÃO' | 'ABSTENÇÃO' | 'AUSENTE';
  description: string;
  againstWorkers: boolean;
}

export interface Deputy {
  id: number;
  name: string;
  fullName: string;
  party: string;
  type: DeputyType;
  status: DeputyStatus;
  integrityScore: number;
  headline: string;
  bio: string;
  patrimony: string;
  processes: Process[];
  votes: Vote[];
  history: { year: string; role: string; party: string }[];
  image?: string; 
}

export interface Alert {
  id: number;
  date: string;
  title: string;
  description: string;
  type: 'urgent' | 'info';
}
