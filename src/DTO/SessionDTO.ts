export interface AttemptPostRequestData {
  [index: string]: unknown;
  repositoryUrl: string;
  branch: string;
  laboratoryId: number;
}

export interface SessionPostRequestData {
  [index: string]: unknown;
  studentId: number;
  laboratoryId: number;
}
