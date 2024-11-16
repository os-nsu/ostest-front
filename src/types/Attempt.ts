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

export interface Attempt extends MinimizedAttempt {
  repositoryUrl: string;
  branch: string;
  testResults: {
    status: string;
  };
}
