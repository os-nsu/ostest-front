import { useEffect, useMemo, useState } from 'react';
import { Group, User } from '@/types/Group';
import { SelectItem } from 'primereact/selectitem';
import { useAttachableListController } from './useAttachableListController';
import { RoleTypes } from '@/types/Role';
import { useGroupProvider } from '@/providers/GroupProvider/useGroupProvider';
import { Filter } from '@/DTO/UserDTO';

interface GroupFormData {
  id: number;
  isArchived: boolean;
  name: string;
  studentsCount: number;
  teachers: User[];
  students: User[];
}

const groupOptions: SelectItem[] = [
  { value: 'active', label: 'Активна' },
  { value: 'archived', label: 'Скрыта' },
];

export const useGroupForm = (group: Group, onUpdate: () => void) => {
  const [isNameError, setNameError] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const students = group.users.filter(user =>
    user.roles.some(role => role.roleName === RoleTypes.STUDENT),
  );

  const teachers = group.users.filter(user =>
    user.roles.some(role => role.roleName === RoleTypes.TEACHER),
  );

  const [formData, setFormData] = useState<GroupFormData>({
    id: group.id,
    name: group.name,
    isArchived: group.isArchived,
    studentsCount: students.length,
    teachers,
    students,
  });

  const studentsFilter: Filter[] = useMemo(
    () => [
      {
        type: 'string',
        fieldName: 'roleName',
        exactSearch: true,
        value: 'STUDENT',
      },
      {
        type: 'string',
        fieldName: 'groupName',
        exactSearch: true,
        value: '',
      },
    ],
    [],
  );

  const teachersFilter: Filter[] = useMemo(
    () => [
      {
        type: 'string',
        fieldName: 'roleName',
        exactSearch: true,
        value: 'TEACHER',
      },
    ],
    [],
  );

  const useTeachers = () =>
    useAttachableListController(teachers, teachersFilter);
  const useStudents = () =>
    useAttachableListController(students, studentsFilter);

  const {
    selectedItems: selectedStudents,
    showItemSearch: showStudentSearch,
    filteredItems: studentNames,
    searchText: studentSearchText,
    handleSelect: handleStudentSelect,
    toggleSearch: toggleStudentSearch,
    removeItem: removeStudent,
    setSearchText: setStudentSearchText,
  } = useStudents();

  const {
    selectedItems: selectedTeachers,
    showItemSearch: showTeacherSearch,
    filteredItems: teacherNames,
    searchText: TeacherSearchText,
    handleSelect: handleTeacherSelect,
    toggleSearch: toggleTeacherSearch,
    removeItem: removeTeacher,
    setSearchText: setTeacherSearchText,
  } = useTeachers();

  useEffect(() => {
    setButtonDisabled(!formData.name.trim());
  }, [formData.name]);

  const onFieldChange = (
    fieldType: keyof GroupFormData,
    value: string | number | boolean | User[],
  ) => setFormData({ ...formData, [fieldType]: value });

  const onSubmit = () => {
    const studentIds = new Set<number>(students.map(student => student.id));
    const teacherIds = new Set<number>(teachers.map(teacher => teacher.id));
    const allIds = new Set([...studentIds, ...teacherIds]);

    const selectedStudentIds = new Set<number>(
      selectedStudents.map(student => student.id),
    );
    const selectedTeacherIds = new Set<number>(
      selectedTeachers.map(teacher => teacher.id),
    );
    const selectedAllIds = new Set([
      ...selectedStudentIds,
      ...selectedTeacherIds,
    ]);

    const addUsers = Array.from(selectedAllIds).filter(id => !allIds.has(id));
    const deleteUsers = Array.from(allIds).filter(
      id => !selectedAllIds.has(id),
    );

    useGroupProvider()
      .editGroup({
        id: formData.id,
        name: formData.name,
        isArchived: formData.isArchived,
        addUsers: addUsers,
        deleteUsers: deleteUsers,
      })
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

  return {
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
  };
};
