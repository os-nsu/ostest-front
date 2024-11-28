import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { useTestProvider } from '@/providers/TestProvider/useTestProvider';
import { MinimizedTest, Test } from '@/types/Test';
import { SelectItem } from 'primereact/selectitem';
import { useEffect, useState } from 'react';
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
  const [formData, setFormData] = useState<Laboratory>(laboratory);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isNameError, setNameError] = useState('');
  const [isTestsLoading, setTestsLoading] = useState(false);
  const [availableTests, setAvailableTests] = useState<MinimizedTest[]>([]);
  const [selectedTests, setSelectedTests] = useState<Test[]>(
    laboratory.tests || [],
  );

  const fetchAvailableTests = () => {
    setTestsLoading(true);
    useTestProvider()
      .getAllTests()
      .then(({ status, data }) => {
        if (status !== 200 || !data) {
          return;
        }
        setAvailableTests(data);
      })
      .finally(() => setTestsLoading(false));
  };

  useEffect(() => {
    fetchAvailableTests();
  }, []);

  useEffect(() => {
    setButtonDisabled(!formData.name.trim());
  }, [formData.name]);

  const handleSelectTest = (testId: string) => {
    const selectedTest = availableTests.find(test => test.id === +testId);
    if (selectedTest && !selectedTests.find(t => t.id === selectedTest.id)) {
      const updatedTests = [...selectedTests, selectedTest as Test];
      setSelectedTests(updatedTests);
      onFieldChange('tests', updatedTests);
    }
  };

  const handleDeselectTest = (test: Test) => {
    const updatedTests = selectedTests.filter(t => t.id !== test.id);
    setSelectedTests(updatedTests);
    onFieldChange('tests', updatedTests);
  };

  const convertAvailableTestsToSelectItems = (): SelectItem[] => {
    return availableTests.map(test => ({
      label: test.name,
      value: test.id,
    }));
  };

  const laboratoryProvider = useLaboratoryProvider();

  const onSubmit = () => {
    const { id, tests, ...laboratoryData } = formData;

    const addTests = tests
      .filter(test => !laboratory.tests.find(t => t.id === test.id))
      .map(test => ({ testId: test.id, isSwitchedOn: true }));

    const deleteTests = laboratory.tests
      .filter(test => !tests.find(t => t.id === test.id))
      .map(test => ({ testId: test.id, isSwitchedOn: false }));

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
    availableTests: convertAvailableTestsToSelectItems(),
    selectedTests,
    onSubmit,
    onFieldChange,
    handleSelectTest,
    handleDeselectTest,
    isTestsLoading,
    isNameError,
  };
};
