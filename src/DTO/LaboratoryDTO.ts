export interface LaboratoryRequestData {
  [index: string]: unknown;
  name: string;
  description: string;
  semesterNumber: number;
  deadline: Date;
  isHidden: boolean;
}

export interface LaboratorySearchRequestData {
  [index: string]: unknown;
  isHidden: boolean;
  semesterNumber: number;
}

interface Test {
  id: number;
  name: string;
  description: string;
  testCategory: string;
}

export interface LaboratoryResponseData {
  id: number;
  name: string;
  description: string;
  semesterNumber: number;
  deadline: Date;
  isHidden: boolean;
  tests: [Test];
}

export interface LaboratorySearchResponseData {
  id: number;
  name: string;
  deadline: Date;
  isHidden: boolean;
}
