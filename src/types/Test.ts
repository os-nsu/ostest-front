export enum TestCategory {
  DEFAULT = 'DEFAULT',
}

export interface MinimizedTest {
  id: number;
  name: string;
}

export interface Test extends MinimizedTest {
  code: string;
  description: string;
  category: TestCategory;
}
