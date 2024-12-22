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
    studentSearchText,
    setStudentSearchText,
    TeacherSearchText,
    setTeacherSearchText,
  } = useGroupForm(group, onUpdate);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !isButtonDisabled) {
      onSubmit();
    }
  };

  return (
    <div className={[styles.container, containerClass].join(' ')}>
      <div className={styles.fieldContainer} onKeyDown={handleKeyDown}>
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
          value={formData?.isArchived ? 'archived' : 'active'}
          onSelect={value => onFieldChange('isArchived', value === 'archived')}
        />
        <div className={styles.fieldContainer}>
          <DefaultFieldLabel label="Число участников" />
          <span>{selectedStudents.length}</span>
        </div>
        {showTeacherSearch && (
          <DefaultSearchComponent
            options={teacherNames}
            label="Поиск преподавателей"
            placeholder="Введите фамилию преподавателя"
            field="name"
            onSelect={handleTeacherSelect}
            getOptionLabel={teacher => teacher.name}
            setSearchText={setTeacherSearchText}
            searchText={TeacherSearchText}
          />
        )}
        <AttachableList
          label="Преподаватели"
          emptyText="Выберите преподавателей"
          entities={selectedTeachers}
          onAttach={toggleTeacherSearch}
          onDetach={removeTeacher}
          attachIcon={IconPlus}
          detachIcon={IconBan}
        />
        {showStudentSearch && (
          <DefaultSearchComponent
            options={studentNames}
            label="Поиск студентов"
            placeholder="Введите фамилию студента"
            field="name"
            onSelect={handleStudentSelect}
            getOptionLabel={student => student.name}
            setSearchText={setStudentSearchText}
            searchText={studentSearchText}
          />
        )}
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
