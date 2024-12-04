export enum AttemptStatus {
  IN_QUEUE = 'В очереди',
  IN_PROGRESS = 'В процессе',
  SUCCESS = 'Принято',
  FAILURE = 'Не принято',
  ERROR = 'Ошибка',
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
