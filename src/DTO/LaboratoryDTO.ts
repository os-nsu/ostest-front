import { Test } from '@/types/Test';

export interface LaboratoryRequestData {
  [index: string]: unknown;
  name: string;
  description: string;
  semesterNumber: number;
  deadline: string;
  isHidden: boolean;
}

export interface LaboratorySearchRequestData {
  [index: string]: unknown;
  isHidden?: boolean;
  semesterNumber?: number;
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
