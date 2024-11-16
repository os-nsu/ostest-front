import { MinimizedAttempt } from './Attempt';

export interface Session {
  labarotory: {
    name: string;
  };
  attempts: MinimizedAttempt[];
}
