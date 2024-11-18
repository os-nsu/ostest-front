import { useEffect, useState } from 'react';
import { useTestProvider } from '@/providers/TestProvider/useTestProvider.ts';
import { MinimizedTest, Test } from '@/types/Test.ts';

export const useTestsPageContent = () => {
  const [tests, setTests] = useState<MinimizedTest[]>([]);
  const [selectedTest, setSelectedTest] = useState<Test>();
  const [isAsideDisplayed, setAsideDisplayed] = useState(false);
  const [isCreateModalDisplayed, setCreateModalDisplayed] = useState(false);
  const [isDeleteModalDisplayed, setDeleteModalDisplayed] = useState(false);
  const [isListLoading, setListLoading] = useState(false);

  const requestTests = () => {
    setListLoading(true);
    useTestProvider()
      .getAllTests()
      .then(({ status, data }) => {
        if (status !== 200 || !data) {
          return;
        }

        setTests(data);
      })
      .finally(() => setListLoading(false));
  };

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

  const onEditTest = () => {
    onCloseAside();
    requestTests();
  };

  const onCreatedTest = () => {
    setCreateModalDisplayed(false);
    requestTests();
  };

  const onDeleteTest = () => {
    if (!selectedTest) {
      return;
    }

    useTestProvider()
      .deleteTestById(selectedTest.id)
      .then(() => {
        setDeleteModalDisplayed(false);
        onCloseAside();
        requestTests();
      });
  };

  useEffect(() => requestTests(), []);

  return {
    tests,
    selectedTest,
    isAsideDisplayed,
    isListLoading,
    isCreateModalDisplayed,
    isDeleteModalDisplayed,
    setAsideDisplayed,
    setCreateModalDisplayed,
    setDeleteModalDisplayed,
    onCloseAside,
    onEditTest,
    onCreatedTest,
    onDeleteTest,
    requestSelectedTest,
  };
};
