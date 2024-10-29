import { SelectItem } from 'primereact/selectitem';
import { useEffect, useState } from 'react';
import { Group, GroupStatus } from '@/types/Group';

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
          !formData.studentsCount,
      ),
    [formData],
  );

  const onFieldChange = (
    fieldType: keyof GroupFormData,
    value: string | number | GroupStatus,
  ) => setFormData({ ...formData, [fieldType]: value });

  const onSubmit = () => console.log(formData);

  return {
    formData,
    isButtonDisabled,
    groupOptions: groupOptions,
    onFieldChange,
    onSubmit,
  };
};
