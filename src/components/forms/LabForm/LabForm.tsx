import { useLabForm } from '@/components/forms/LabForm/hooks/useLabForm.ts';
import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import DefaultTextArea from '@UI/textAreas/DefaultTextArea/DefaultTextArea.tsx';
import DefaultDropdown from '@UI/inputs/DefaultDropdown/DefaultDropdown.tsx';
import { Button } from 'primereact/button';
import ModalCreateTest from '@/components/modals/ModalCreateTest/ModalCreateTest';
import styles from '@styles/components/LabForm.module.scss';
import { useState, useEffect } from 'react';

export default function LabForm() {
  const {
    formData,
    isButtonDisabled,
    availableTests,
    error,
    onFieldChange,
    addTest,
    removeTest,
    onSubmit,
  } = useLabForm();

  const [isCreateTestModalVisible, setCreateTestModalVisible] = useState(false);
  const [filteredTests, setFilteredTests] = useState(availableTests);

  useEffect(() => {
    const selectedTestIds = formData?.selectedTests || [];
    setFilteredTests(
      availableTests.filter(test => !selectedTestIds.includes(test.value)),
    );
  }, [formData?.selectedTests, availableTests]);

  return (
    <div className={styles.container}>
      <DefaultInput
        label="Название лабораторной"
        placeholder="Введите название"
        required
        onChange={value => onFieldChange('name', value)}
      />
      <DefaultTextArea
        label="Описание"
        placeholder="Опишите лабораторную работу"
        autoresize={true}
        onChange={value => onFieldChange('description', value)}
      />
      <div className={styles.testsSection}>
        <DefaultDropdown
          options={filteredTests}
          label="Выберите тесты"
          placeholder="Выберите тест"
          onSelect={testId => {
            if (testId !== undefined) addTest(Number(testId));
          }}
        />
        <div className={styles.selectedTestsWrapper}>
          {formData?.selectedTests?.map(testId => (
            <div key={testId} className={styles.selectedTest}>
              <span className={styles.testLabel}>
                {availableTests.find(test => test.value === testId)?.label}
              </span>
              <span
                className={styles.removeIcon}
                onClick={() => removeTest(testId)}>
                X
              </span>
            </div>
          ))}
        </div>
        <Button
          className={styles.addButton}
          label="Добавить тест"
          onClick={() => setCreateTestModalVisible(true)}
        />
      </div>

      <ModalCreateTest
        displayed={isCreateTestModalVisible}
        onClose={() => setCreateTestModalVisible(false)}
      />

      {error && <p className={styles.error}>{error}</p>}
      <Button
        className={styles.submitButton}
        disabled={isButtonDisabled}
        label="Создать"
        onClick={onSubmit}
      />
    </div>
  );
}
