import { Button } from 'primereact/button';
import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import DefaultDropdown from '@UI/inputs/DefaultDropdown/DefaultDropdown.tsx';
import DefaultFieldLabel from '@/UI/label/DefaultFieldLabel/DefaultFieldLabel';
import DefaultSearchComponent from '@/UI/search/DefaulSearchComponent/DefaultSearchComponent';
import { Group } from '@/types/Group';
import { useGroupForm } from './hooks/useGroupForm';
import IconPlus from '@public/plus.svg';
import IconBan from '@public/ban.svg';
import IconButton from '@/UI/buttons/IconButton/IconButton';
import styles from '@styles/components/GroupForm.module.scss';

interface GroupFormProps {
  group?: Group;
  containerClass?: string;
  buttonLabel?: string;
}

export default function GroupForm({
  group,
  containerClass,
  buttonLabel,
}: GroupFormProps) {
  const {
    formData,
    isButtonDisabled,
    groupOptions,
    onFieldChange,
    onSubmit,
    selectedStudents,
    showStudentSearch,
    handleStudentSelect,
    toggleStudentSearch,
    removeStudent,
  } = useGroupForm(group);

  const students = [
    { name: 'student 1' },
    { name: 'student 2' },
    { name: 'student 3' },
    { name: 'student 4' },
    { name: 'student 5' },
    { name: 'student 6' },
    { name: 'student 7' },
    { name: 'student 8' },
    { name: 'student 9' },
    { name: 'student 10' },
  ];

  return (
    <div className={[styles.container, containerClass].join(' ')}>
      <div className={styles.fieldContainer}>
        <DefaultInput
          label="Название"
          placeholder="Введите название"
          value={formData?.name}
          onChange={value => onFieldChange('name', value)}
        />
        <DefaultDropdown
          options={groupOptions}
          label="Статус группы"
          placeholder="Выберите статус группы"
          value={formData?.status}
          onSelect={value => onFieldChange('status', value || '')}
        />
        <div className={styles.fieldContainer}>
          <DefaultFieldLabel label="Число участников" />
          <span>{selectedStudents.length}</span>
        </div>
        <div className={styles.fieldContainer}>
          <div className={styles.headerWithButton}>
            <DefaultFieldLabel label="Преподаватели" />
            <IconButton icon={IconPlus} />
          </div>
          <span>Здесь будут преподаватели, пока что {formData?.teacher}</span>
        </div>
        <DefaultSearchComponent
          options={students}
          label="Поиск студентов"
          placeholder="Введите имя студента"
          field="name"
          onSelect={handleStudentSelect}
          selectedValue={null}
          showSearch={showStudentSearch}
          getOptionLabel={student => student.name}
        />
        <div className={styles.fieldContainer}>
          <div className={styles.headerWithButton}>
            <DefaultFieldLabel label="Студенты" />
            <IconButton icon={IconPlus} onClick={toggleStudentSearch} />
          </div>
          {selectedStudents.length > 0 ? (
            <div>
              {selectedStudents.map(student => (
                <div className={styles.list} key={student.name}>
                  <div className={styles.listItem}>{student.name}</div>
                  <IconButton
                    icon={IconBan}
                    onClick={() => removeStudent(student.name)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <span>Выберите студентов</span>
          )}
        </div>
      </div>
      <Button
        className={styles.submitButton}
        disabled={isButtonDisabled}
        label={buttonLabel ? buttonLabel : 'Создать'}
        onClick={onSubmit}
      />
    </div>
  );
}
