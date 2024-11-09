import { Group } from '@/types/Group';
import { RoleTypes } from '@/types/Role';

export const useGroupList = () => {
  const getStudentsCount = (group: Group) => {
    return group.users.filter(user =>
      user.roles.some(role => role.roleName === RoleTypes.STEDENT),
    ).length;
  };

  const getTeacherName = (group: Group) => {
    const teacher = group.users.find(user =>
      user.roles.some(role => role.roleName === RoleTypes.TEACHER),
    );
    return teacher ? `${teacher.firstName} ${teacher.secondName}` : 'Не указан';
  };

  return {
    getStudentsCount,
    getTeacherName,
  };
};
