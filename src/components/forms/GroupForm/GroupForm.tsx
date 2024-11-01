import DefaultInput from '@UI/inputs/DefaultInput/DefaultInput.tsx';
import DefaultDropdown from '@UI/inputs/DefaultDropdown/DefaultDropdown.tsx';
import DefaultFieldLabel from '@/UI/label/DefaultFieldLabel/DefaultFieldLabel';
import DefaultSearchComponent from '@/UI/search/DefaulSearchComponent/DefaultSearchComponent';
import { Group } from '@/types/Group';
import { useGroupForm } from './hooks/useGroupForm';
import IconPlus from '@public/plus.svg';
import IconBan from '@public/ban.svg';
import styles from '@styles/components/GroupForm.module.scss';
import AttachableList from '@/components/AttachableList/AttachableList';
import DefaultButton from '@/UI/buttons/DefaultButton/DefaultButton';

interface GroupFormProps {
  group?: Group;
  containerClass?: string;
  buttonLabel: string;
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
    selectedTeachers,
    showTeacherSearch,
    handleTeacherSelect,
    toggleTeacherSearch,
    removeTeacher,
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
    {
      name: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, aut beatae. Cumque, earum sit repellendus vero ratione dolorem veniam deserunt eligendi expedita? Nam possimus debitis natus animi ad dignissimos omnis!',
    },
  ];

  const teachers = [
    { name: 'teacher 1' },
    { name: 'teacher 2' },
    { name: 'teacher 3' },
    { name: 'teacher 4' },
    { name: 'teacher 5' },
    { name: 'teacher 6' },
    { name: 'teacher 7' },
    { name: 'teacher 8' },
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
        <DefaultSearchComponent
          options={teachers}
          label="Поиск преподавателей"
          placeholder="Введите имя преподавателя"
          field="name"
          onSelect={handleTeacherSelect}
          selectedValue={null}
          showSearch={showTeacherSearch}
          getOptionLabel={teacher => teacher.name}
        />
        <AttachableList
          label="Преподаватели"
          emptyText="Выберите преподавателей"
          entities={selectedTeachers}
          onAttach={toggleTeacherSearch}
          onDetach={removeTeacher}
          attachIcon={IconPlus}
          detachIcon={IconBan}
        />
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
        <AttachableList
          label="Студенты"
          emptyText="Выберите студентов"
          entities={selectedStudents}
          onAttach={toggleStudentSearch}
          onDetach={removeStudent}
          attachIcon={IconPlus}
          detachIcon={IconBan}
        />
      </div>
      <DefaultButton
        buttonClass={styles.submitButton}
        disabled={isButtonDisabled}
        label={buttonLabel}
        onClick={onSubmit}
      />
    </div>
  );
}
