import { Test } from './Test';

export interface Laboratory {
  id: number;
  name: string;
  description: string;
  deadline: string;
  isHidden: boolean;
  semesterNumber: number;
  tests: Test[];
}
