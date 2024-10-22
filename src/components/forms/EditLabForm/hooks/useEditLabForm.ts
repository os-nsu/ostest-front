// import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { useTestProvider } from '@/providers/TestProvider/useTestProvider';
import { Test } from '@/types/Test';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

interface EditLabFormData {
  name: string;
  description?: string;
  deadline?: string;
  tests: Test[];
}

export const useEditLabForm = (initialData: EditLabFormData) => {
  const [formData, setFormData] = useState<EditLabFormData>(initialData);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [availableTests, setAvailableTests] = useState<Test[]>([]);
  const [selectedTests, setSelectedTests] = useState<Test[]>(
    initialData.tests || [],
  );

  const { getAllTests } = useTestProvider();
  const { editLaboratory } = useLaboratoryProvider();

  useEffect(() => {
    async function fetchTests() {
      try {
        const response = await getAllTests();
        setAvailableTests(response.data); // Извлекаем данные из AxiosResponse
      } catch (error) {
        console.error('Ошибка при получении тестов:', error);
      }
    }
    fetchTests();
  }, [getAllTests]);

  const handleSelectTest = (test: Test) => {
    if (!selectedTests.find(t => t.id === test.id)) {
      const updatedTests = [...selectedTests, test];
      setSelectedTests(updatedTests);
      onFieldChange('tests', updatedTests);
    }
  };
  // useEffect(() => setButtonDisabled(!formData?.name), [formData]);
  useEffect(() => {
    setButtonDisabled(!formData.name.trim());
  }, [formData.name]);

  // const laboratoryProvider = useLaboratoryProvider();
  // const navigate = useNavigate();
  const onEdit = () => {
    // if (id) {
    // laboratoryProvider
    //     .deleteLaboratory(id)
    //     .then(({ status }) => {
    //         if (status !== 200) {
    return;
    //     }

    //     navigate('/');
    // })
    // .catch(({ response }) => {
    //     if (response?.status === 404) {
    //         return;
    //     }

    //     console.error(response);
    // });
    // }
  };

  const onFieldChange = (
    fieldType: keyof EditLabFormData,
    value: string | Test[],
  ) => setFormData({ ...formData, [fieldType]: value });

  return {
    formData,
    isButtonDisabled,
    availableTests,
    selectedTests,
    onEdit,
    onFieldChange,
    handleSelectTest,
  };
};
