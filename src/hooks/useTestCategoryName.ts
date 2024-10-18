import { TestCategory } from '@/types/Test.ts';

enum CategoryName {
  DEFAULT = 'Обычный тест',
}

export const useTestCategoryName = (category: TestCategory) => {
  return CategoryName[category];
};
