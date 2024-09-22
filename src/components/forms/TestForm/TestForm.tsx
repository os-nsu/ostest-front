import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import DefaultTextArea from '@UI/textAreas/DefaultTextArea/DefaultTextArea.tsx';
import DefaultFileUploader from '@UI/inputs/DefaultFileUploader/DefaultFileUploader.tsx';
import DefaultDropdown from '@UI/inputs/DefaultDropdown/DefaultDropdown.tsx';
import styles from '@styles/components/TestForm.module.scss';

export default function TestForm() {
  return (
    <div className={styles.container}>
      <DefaultInput label="Название" placeholder="Введите название" />
      <DefaultDropdown
        options={[]}
        label="Категория"
        placeholder="Выберите категорию теста"
      />
      <DefaultTextArea
        label="Описание"
        placeholder="Опишите создаваемый тест"
      />
      <DefaultFileUploader label="Файл теста" placeholder="Выберите файл" />
    </div>
  );
}
