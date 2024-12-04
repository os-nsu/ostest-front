import { MinimizedAttempt } from './Attempt';

export interface Session {
  id: number;
  laboratory: {
    name: string;
  };
  attempts: MinimizedAttempt[];
}
