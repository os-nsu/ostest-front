export enum TestCategory {
  DEFAULT = 'DEFAULT',
}

export interface Test {
  id: number;
  name: string;
  description: string;
  category: TestCategory;
}
