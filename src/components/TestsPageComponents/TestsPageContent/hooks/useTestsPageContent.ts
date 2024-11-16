import { useEffect, useState } from 'react';
import { useTestProvider } from '@/providers/TestProvider/useTestProvider.ts';
import { Test } from '@/types/Test.ts';

export const useTestsPageContent = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [isAsideDisplayed, setAsideDisplayed] = useState(false);

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

  return { tests, isAsideDisplayed, setAsideDisplayed };
};
