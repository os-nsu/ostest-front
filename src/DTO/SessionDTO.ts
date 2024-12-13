import { SessionStatus } from '@/types/Session';
import { User } from '@/types/User';

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

export interface SessionsGetRequestData {
  [index: string]: unknown;
  page: number;
  size: number;
  sort?: string;
}

export interface SessionsContent {
  id: number;
  laboratoryName: string;
  attemptsNumber: number;
  status: SessionStatus;
  student: User;
}

export interface SessionsGetResponseData {
  content: SessionsContent[];
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
}
