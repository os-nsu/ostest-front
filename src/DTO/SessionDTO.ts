export interface AttemptPostRequestData {
  [index: string]: unknown;
  repositoryUrl: string;
  branch: string;
  laboratoryId: number;
}
