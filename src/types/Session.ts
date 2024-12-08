import { MinimizedAttempt } from './Attempt';

export interface Session {
  id: number;
  labarotory: {
    name: string;
  };
  attempts: MinimizedAttempt[];
}
