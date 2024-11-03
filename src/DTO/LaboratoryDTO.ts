import { Test } from '@/types/Test';

export interface LaboratoryPostRequestData {
  [index: string]: unknown;
  name: string;
  description: string;
  semesterNumber: number;
  deadline: string;
  isHidden: boolean;
  testsLinks: {
    testId: number;
    isSwitchedOn: boolean;
  }[];
}

export interface LaboratoryPutRequestData {
  [index: string]: unknown;
  id: number;
  name: string;
  description: string;
  semesterNumber: number;
  deadline: string;
  isHidden: boolean;
  addTestsLinks: {
    testId: number;
    isSwitchedOn: boolean;
  }[];
  deleteTestsLinks: {
    testId: number;
    isSwitchedOn: boolean;
  }[];
}

export interface LaboratorySearchRequestData {
  [index: string]: unknown;
  isHidden?: boolean | null;
  semesterNumber?: number | null;
}

export interface LaboratoryResponseData {
  id: number;
  name: string;
  description: string;
  semesterNumber: number;
  deadline: string;
  isHidden: boolean;
  tests: Test[];
}
