import { useEffect, useState } from 'react';
import { useTestProvider } from '@/providers/TestProvider/useTestProvider.ts';
import { Test } from '@/types/Test.ts';

export const useTestsPageContent = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [selectedTest, setSelectedTest] = useState<Test>();
  const [isAsideDisplayed, setAsideDisplayed] = useState(false);
  const [isCreateModalDisplayed, setCreateModalDisplayed] = useState(false);

  const requestTests = () => {
    useTestProvider()
      .getAllTests()
      .then(({ status, data }) => {
        if (status !== 200 || !data) {
          return;
        }

        setTests(data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => requestTests(), []);

  const requestSelectedTest = (id?: number) => {
    if (!id) {
      return;
    }

    useTestProvider()
      .getTestById(id)
      .then(({ status, data }) => {
        if (status !== 200 || !data) {
          return;
        }

        setSelectedTest(data);
        setAsideDisplayed(true);
      });
  };

  const onCloseAside = () => {
    setSelectedTest(undefined);
    setAsideDisplayed(false);
  };

  return {
    tests,
    selectedTest,
    isAsideDisplayed,
    setAsideDisplayed,
    isCreateModalDisplayed,
    setCreateModalDisplayed,
    onCloseAside,
    requestSelectedTest,
  };
};
