import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import DefaultTextArea from '@UI/textAreas/DefaultTextArea/DefaultTextArea.tsx';
import { useLabForm } from '@/components/forms/LabForm/hooks/useLabForm.ts';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import styles from '@styles/components/LabForm.module.scss';
import { useState } from 'react';

export default function LabForm() {
  const { isButtonDisabled, onFieldChange, onSubmit } = useLabForm();
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className={styles.container}>
      <DefaultInput
        label="Название"
        placeholder="Введите название"
        required
        onChange={value => onFieldChange('name', value)}
      />
      <DefaultTextArea
        label="Описание"
        placeholder="Введите описание работы"
        autoresize={true}
        required
        onChange={value => onFieldChange('description', value || '')}
      />
      <div className={styles.calendar}>
        <label htmlFor="deadline">Срок сдачи</label>
        <Calendar
          inputId="deadline"
          placeholder="Выберите дату"
          ariaLabel="Выберите дату"
          value={date}
          required
          onChange={e => {
            const selectedDate = e.value ? new Date(e.value) : undefined;
            setDate(selectedDate);
            onFieldChange('deadline', selectedDate);
          }}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          className={styles.submitButton}
          disabled={isButtonDisabled}
          label="Создать"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
}
