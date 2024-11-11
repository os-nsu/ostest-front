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
  group: Group;
  containerClass?: string;
  buttonLabel: string;
  onUpdate: () => void;
}

export default function GroupForm({
  group,
  containerClass,
  buttonLabel,
  onUpdate,
}: GroupFormProps) {
  const {
    formData,
    isNameError,
    isButtonDisabled,
    studentNames,
    teacherNames,
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
  } = useGroupForm(group, onUpdate);

  return (
    <div className={[styles.container, containerClass].join(' ')}>
      <div className={styles.fieldContainer}>
        <DefaultInput
          label="Название"
          placeholder="Введите название"
          value={formData.name}
          onChange={value => onFieldChange('name', value || '')}
          invalid={isNameError.length > 0}
          errorLabel={isNameError}
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
          options={teacherNames}
          label="Поиск преподавателей"
          placeholder="Введите имя преподавателя"
          field="name"
          onSelect={handleTeacherSelect}
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
          options={studentNames}
          label="Поиск студентов"
          placeholder="Введите имя студента"
          field="name"
          onSelect={handleStudentSelect}
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
