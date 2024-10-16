import { Test } from '@/types/Test.ts';

export interface CreateTestRequestData {
  [index: string]: unknown;
  data: Test;
  file: string;
}
