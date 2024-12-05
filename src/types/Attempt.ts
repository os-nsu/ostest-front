export enum AttemptStatus {
  IN_QUEUE = 'IN_QUEUE',
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  ERROR = 'ERROR',
}

export interface MinimizedAttempt {
  id: string;
  sequenceOrder: number;
  status: AttemptStatus;
}

export interface TestResult {
  isPassed: boolean;
  description: string;
  memoryUsed: number;
  duration: number;
  name: string;
}

export interface Attempt extends MinimizedAttempt {
  repositoryUrl: string;
  branch: string;
  attemptResult: {
    testResults: TestResult[];
    duration: number;
    errorDetails: string;
  };
}
