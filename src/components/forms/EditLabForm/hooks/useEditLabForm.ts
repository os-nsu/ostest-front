import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { Test } from '@/types/Test';
import { SelectItem } from 'primereact/selectitem';
import { useEffect, useState } from 'react';
import { TestCategory } from '@/types/Test';

interface EditLabFormData {
  name: string;
  description: string;
  deadline: string;
  tests: Test[];
  id: number;
  isHidden: boolean;
  semesterNumber: number;
}

export const useEditLabForm = (initialData: EditLabFormData) => {
  const [formData, setFormData] = useState<EditLabFormData>(initialData);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [selectedTests, setSelectedTests] = useState<Test[]>(initialData.tests);

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

  const onEdit = () => {
    if (initialData.id) {
      laboratoryProvider
        .editLaboratory({
          id: formData.id,
          name: formData.name,
          deadline: formData.deadline,
          description: formData.description,
          semesterNumber: formData.semesterNumber,
          isHidden: formData.isHidden,
          // test: formData.tests,
        })
        .then(({ status }) => {
          if (status !== 200) {
            return;
          }
          window.location.reload();
        })
        .catch(({ response }) => {
          console.error(response);
        });
    }
  };

  const onFieldChange = (
    fieldType: keyof EditLabFormData,
    value: string | Test[],
  ) => setFormData({ ...formData, [fieldType]: value });

  function parseDateFromString(dateStr: string): Date | undefined {
    const [day, month, year] = dateStr.split('.').map(Number);
    return day && month && year ? new Date(year, month - 1, day) : undefined;
  }

  return {
    formData,
    isButtonDisabled,
    availableTests: convertTestsToSelectItems(availableTests),
    selectedTests,
    onEdit,
    onFieldChange,
    handleSelectTest,
    handleDeselectTest,
    parseDateFromString,
  };
};
