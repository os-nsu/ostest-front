import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { Test } from '@/types/Test';
import { SelectItem } from 'primereact/selectitem';
import { useEffect, useState } from 'react';
import { TestCategory } from '@/types/Test';
import { Laboratory } from '@/types/Laboratory';
import { LaboratoryRequestData } from '@/DTO/LaboratoryDTO';

export const useLabForm = (
  isEditing: boolean,
  laboratory: Laboratory,
  onUpdate: () => void,
) => {
  const [formData, setFormData] = useState(laboratory);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [selectedTests, setSelectedTests] = useState<Test[]>(laboratory.tests);
  const [isNameError, setNameError] = useState('');

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
    if (selectedTest && !selectedTests.find(t => t.id === selectedTest.id)) {
      const updatedTests = [...selectedTests, selectedTest];
      setSelectedTests(updatedTests);
      onFieldChange('tests', updatedTests);
    }
  };

  const handleDeselectTest = (test: Test) => {
    const updatedTests = selectedTests.filter(t => t.id !== test.id);
    setSelectedTests(updatedTests);
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
    const laboratoryData: Omit<Laboratory, 'id'> = {
      name: formData.name,
      deadline: formData.deadline,
      description: formData.description,
      semesterNumber: formData.semesterNumber,
      isHidden: formData.isHidden,
      tests: formData.tests,
    };

    if (isEditing) {
      if (laboratory.id)
        EditLaboratory({ id: laboratory.id, ...laboratoryData });
      else AddLaboratory(laboratoryData);
    }
  };

  interface LaboratoryEditRequestData extends LaboratoryRequestData {
    id: number;
  }

  const EditLaboratory = (data: LaboratoryEditRequestData) => {
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

  const AddLaboratory = (data: LaboratoryRequestData) => {
    laboratoryProvider
      .addLaboratory(data)
      .then(({ status }) => {
        if (status !== 200) {
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
    selectedTests,
    onSubmit,
    onFieldChange,
    handleSelectTest,
    handleDeselectTest,
    isNameError,
  };
};
