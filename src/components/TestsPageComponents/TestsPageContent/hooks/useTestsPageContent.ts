import { useEffect, useState } from 'react';
import { useTestProvider } from '@/providers/TestProvider/useTestProvider.ts';
import { Test } from '@/types/Test.ts';

const mock: Test[] = [
  {
    id: 1,
    name: 'Тест 1',
    description: 'sffwefewfewf',
    category: 'DEFAULT',
  },
  {
    id: 2,
    name: 'Тест 2',
    description: 'sffwefewfewf',
    category: 'DEFAULT',
  },
  {
    id: 3,
    name: 'Тест 3',
    description:
      'sffwefewfewfasdasssssssssssssssssssssssssssssssssssssssssssssssssssssssdsasasasasasasasasasasasasasasasasasasasasasffwefewfewfasdasssssssssssssssssssssssssssssssssssssssssssssssssssssssdsasasasasasasasasasasasasasasasasasasasasa',
    category: 'DEFAULT',
  },
];

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

        // setTests(data);
        setTests(mock);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => requestTests(), []);

  return { tests, isAsideDisplayed, setAsideDisplayed };
};
