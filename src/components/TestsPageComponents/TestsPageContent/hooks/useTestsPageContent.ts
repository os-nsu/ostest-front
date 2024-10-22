import { useEffect, useState } from 'react';
import { useTestProvider } from '@/providers/TestProvider/useTestProvider.ts';
import { Test, TestCategory } from '@/types/Test.ts';

export const useTestsPageContent = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [selectedTest, setSelectedTest] = useState<Test>();
  const [isAsideDisplayed, setAsideDisplayed] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const requestTests = () => {
    setLoading(true);
    useTestProvider()
      .getAllTests()
      .then(({ status, data }) => {
        if (status !== 200 || !data) {
          return;
        }

        data.push({
          id: 5,
          name: 'Test 1',
          description: 'efwsfsdf thbrth ea dfwefwf htyr jdsfsd dfsdftrrgth',
          category: TestCategory.DEFAULT,
        });

        setTests(data);
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  };

  const onSelectTest = (test: Test) => {
    setAsideDisplayed(true);
    setSelectedTest(test);
  };

  useEffect(() => requestTests(), []);

  return {
    isLoading,
    tests,
    selectedTest,
    isAsideDisplayed,
    onSelectTest,
    setAsideDisplayed,
  };
};
