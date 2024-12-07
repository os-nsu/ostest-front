import { MinimizedAttempt } from './Attempt';

export enum SessionStatus {
  NEW = 'NEW',
  INACTIVE = 'INACTIVE',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export interface Session {
  id: number;
  labarotory: {
    name: string;
  };
  attempts: MinimizedAttempt[];
}
