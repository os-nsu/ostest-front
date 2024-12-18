import { Group } from '@/types/Group';
import { RoleTypes } from '@/types/Role';

export type ExtractorKey = 'studentsCount' | 'teacher' | 'name' | 'status';

export const useGroupList = () => {
  const getStudentsCount = (group: Group) => {
    return group.users
      .filter(user =>
        user.roles.some(role => role.roleName === RoleTypes.STUDENT),
      )
      .length.toString();
  };

  const getTeacherName = (group: Group) => {
    const teacher = group.users.find(user =>
      user.roles.some(role => role.roleName === RoleTypes.TEACHER),
    );
    return teacher ? `${teacher.firstName} ${teacher.secondName}` : 'Не указан';
  };

  const rowExtractors: Record<ExtractorKey, (rowData: Group) => string> = {
    studentsCount: rowData => getStudentsCount(rowData),
    teacher: rowData => getTeacherName(rowData),
    name: rowData => rowData.name,
    status: rowData => (rowData.isArchived ? 'Скрыта' : 'Активна'),
  };

  return {
    rowExtractors,
  };
};
