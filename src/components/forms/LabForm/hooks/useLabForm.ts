import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { Test } from '@/types/Test';
import { SelectItem } from 'primereact/selectitem';
import { useEffect, useState } from 'react';
import { TestCategory } from '@/types/Test';
import { Laboratory } from '@/types/Laboratory';
import {
  LaboratoryPostRequestData,
  LaboratoryPutRequestData,
} from '@/DTO/LaboratoryDTO';

export const useLabForm = (
  isEditing: boolean,
  laboratory: Laboratory,
  onUpdate: () => void,
) => {
  const [formData, setFormData] = useState(laboratory);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isNameError, setNameError] = useState('');
  const initialTests = laboratory.tests;

  // потом должны быть все тесты из бд
  const availableTests: Test[] = [
    {
      id: 1,
      name: 'test 1',
      description: 'descr 1',
      category: TestCategory.DEFAULT,
    },
    {
      id: 2,
      name: 'test 2',
      description: 'descr 2',
      category: TestCategory.DEFAULT,
    },
    {
      id: 3,
      name: 'test 3',
      description: 'descr 2',
      category: TestCategory.DEFAULT,
    },
    {
      id: 4,
      name: 'test 4',
      description: 'descr 2',
      category: TestCategory.DEFAULT,
    },
    {
      id: 5,
      name: 'test 5',
      description: 'descr 2',
      category: TestCategory.DEFAULT,
    },
    {
      id: 6,
      name: 'test 6',
      description: 'descr 2',
      category: TestCategory.DEFAULT,
    },
    {
      id: 7,
      name: 'test 7',
      description: 'descr 2',
      category: TestCategory.DEFAULT,
    },
    {
      id: 8,
      name: 'test 8',
      description: 'descr 2',
      category: TestCategory.DEFAULT,
    },
    {
      id: 9,
      name: 'test 9',
      description: 'descr 2',
      category: TestCategory.DEFAULT,
    },
    {
      id: 10,
      name: 'test 10',
      description: 'descr 3',
      category: TestCategory.DEFAULT,
    },
  ];

  useEffect(() => {
    setButtonDisabled(!formData.name.trim());
  }, [formData.name]);

  const handleSelectTest = (testId: string) => {
    const selectedTest = availableTests.find(test => test.id === +testId);
    if (selectedTest && !formData.tests.find(t => t.id === selectedTest.id)) {
      const updatedTests = [...formData.tests, selectedTest];
      formData.tests = updatedTests;
      onFieldChange('tests', updatedTests);
    }
  };

  const handleDeselectTest = (test: Test) => {
    const updatedTests = formData.tests.filter(t => t.id !== test.id);
    formData.tests = updatedTests;
    onFieldChange('tests', updatedTests);
  };

  const convertTestsToSelectItems = (tests: Test[]): SelectItem[] => {
    return tests.map(test => ({
      label: test.name,
      value: test.id,
    }));
  };

  const laboratoryProvider = useLaboratoryProvider();

  const onSubmit = () => {
    const { id, tests, ...laboratoryData } = formData;

    const addTests = tests
      .filter(test => !initialTests.find(t => t.id === test.id))
      .map(test => ({ testId: test.id, isSwitchedOn: true }));

    const deleteTests = initialTests
      .filter(test => !tests.find(t => t.id === test.id))
      .map(test => ({ testId: test.id, isSwitchedOn: true }));

    if (isEditing) {
      if (!laboratory.id) {
        return;
      }
      editLaboratory({
        id,
        ...laboratoryData,
        addTestsLinks: addTests,
        deleteTestsLinks: deleteTests,
      });
      return;
    }

    addLaboratory({ ...laboratoryData, testsLinks: addTests });
  };

  const editLaboratory = (data: LaboratoryPutRequestData) => {
    laboratoryProvider
      .editLaboratory(data)
      .then(({ status }) => {
        if (status !== 200) {
          return;
        }
        onUpdate();
      })
      .catch(({ response }) => {
        if (response.status === 400) {
          setNameError(response.data.message);
          return;
        }
        console.error(response);
      });
  };

  const addLaboratory = (data: LaboratoryPostRequestData) => {
    laboratoryProvider
      .addLaboratory(data)
      .then(({ status }) => {
        if (status !== 201) {
          return;
        }
        onUpdate();
      })
      .catch(({ response }) => {
        console.error(response);
      });
  };

  const onFieldChange = (fieldType: keyof Laboratory, value: string | Test[]) =>
    setFormData({ ...formData, [fieldType]: value });

  return {
    formData,
    isButtonDisabled,
    availableTests: convertTestsToSelectItems(availableTests),
    onSubmit,
    onFieldChange,
    handleSelectTest,
    handleDeselectTest,
    isNameError,
  };
};
