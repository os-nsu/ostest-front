import { Test } from './Test';

export interface MinimizedLaboratory {
  id: number;
  name: string;
  deadline: string;
  isHidden: boolean;
}

export interface Laboratory extends MinimizedLaboratory {
  description: string;
  semesterNumber: number;
  tests: Test[];
}
