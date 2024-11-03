import { useEffect, useState } from 'react';
import { Group, GroupStatus } from '@/types/Group';
import { SelectItem } from 'primereact/selectitem';
import { useAttachableListController } from './useAttachableListController';

interface GroupFormData {
  status?: GroupStatus;
  name?: string;
  studentsCount?: number;
  teacher?: string;
}

const groupOptions: SelectItem[] = [
  { value: GroupStatus.ACTIVE, label: 'Активна' },
  { value: GroupStatus.INACTIVE, label: 'Скрыта' },
];

export const useGroupForm = (group?: Group) => {
  const [formData, setFormData] = useState<GroupFormData>();
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const useTeachers = () => useAttachableListController();
  const useStudents = () => useAttachableListController();

  const {
    selectedItems: selectedStudents,
    showItemSearch: showStudentSearch,
    handleSelect: handleStudentSelect,
    toggleSearch: toggleStudentSearch,
    removeItem: removeStudent,
  } = useStudents();

  const {
    selectedItems: selectedTeachers,
    showItemSearch: showTeacherSearch,
    handleSelect: handleTeacherSelect,
    toggleSearch: toggleTeacherSearch,
    removeItem: removeTeacher,
  } = useTeachers();

  useEffect(() => {
    if (!group) {
      return;
    }

    const { name, studentsCount, status, teacher } = group;
    setFormData({
      name,
      studentsCount,
      status,
      teacher,
    });
  }, [group]);

  useEffect(
    () =>
      setButtonDisabled(
        !formData?.status ||
          !formData.teacher ||
          !formData.name ||
          selectedStudents.length === 0 ||
          selectedTeachers.length === 0,
      ),
    [formData, selectedStudents, selectedTeachers],
  );

  const onFieldChange = (
    fieldType: keyof GroupFormData,
    value: string | number | GroupStatus,
  ) => setFormData({ ...formData, [fieldType]: value });

  const onSubmit = () => {
    console.log(formData);
  };

  return {
    formData,
    isButtonDisabled,
    groupOptions: groupOptions,
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
  };
};
