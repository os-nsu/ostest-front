// import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
// import { useTestProvider } from '@/providers/TestProvider/useTestProvider';
import { Test } from '@/types/Test';
import { SelectItem } from 'primereact/selectitem';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

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
  // const [availableTests, setAvailableTests] = useState<Test[]>(initialData.tests);
  const availableTests: Test[] = initialData.tests;
  const [selectedTests, setSelectedTests] = useState<Test[]>([]);

  // const { getAllTests } = useTestProvider();
  // const { editLaboratory } = useLaboratoryProvider();

  // useEffect(() => {
  //   async function fetchTests() {
  //     try {
  //       const response = await getAllTests();
  //       setAvailableTests(response.data); // Извлекаем данные из AxiosResponse
  //     } catch (error) {
  //       console.error('Ошибка при получении тестов:', error);
  //     }
  //   }
  //   fetchTests();
  // }, [getAllTests]);

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
  // useEffect(() => setButtonDisabled(!formData?.name), [formData]);
  useEffect(() => {
    setButtonDisabled(!formData.name.trim());
  }, [formData.name]);

  const laboratoryProvider = useLaboratoryProvider();
  // const navigate = useNavigate();
  const onEdit = () => {
    if (initialData.id) {
      laboratoryProvider
        .editLaboratory({
          deadline: formData.deadline,
          description: formData.description,
          semesterNumber: formData.semesterNumber,
          isHidden: formData.isHidden,
          name: formData.name,
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

  const convertTestsToSelectItems = (tests: Test[]): SelectItem[] => {
    return tests.map(test => ({
      label: test.name,
      value: test.id,
    }));
  };

  const onFieldChange = (
    fieldType: keyof EditLabFormData,
    value: string | Test[],
  ) => setFormData({ ...formData, [fieldType]: value });

  return {
    formData,
    isButtonDisabled,
    availableTests: convertTestsToSelectItems(availableTests),
    selectedTests,
    onEdit,
    onFieldChange,
    handleSelectTest,
    handleDeselectTest,
  };
};
