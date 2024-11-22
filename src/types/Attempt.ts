export enum AttemptStatus {
  IN_QUEUE = 'В очереди',
  IN_PROGRESS = 'В процессе',
  SUCCESS = 'Принято',
  FAILURE = 'Не принято',
  ERROR = 'Ошибка',
}

export enum TestStatus {
  SUCCESS = 'Пройден',
  FAILURE = 'Не пройден',
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
    status: TestStatus;
  };
}
