import { Group } from '@/types/Group';
import { RoleTypes } from '@/types/Role';

export const useAboutGroup = (group: Group) => {
  const students = group.users.filter(user =>
    user.roles.some(role => role.roleName === RoleTypes.STEDENT),
  );

  const teachers = group.users.filter(user =>
    user.roles.some(role => role.roleName === RoleTypes.TEACHER),
  );

  const studentNames = students.map(user => ({
    name: `${user.firstName} ${user.secondName}`,
  }));
  const teacherNames = teachers.map(user => ({
    name: `${user.firstName} ${user.secondName}`,
  }));
  const studentsCount = students.length.toString();

  return {
    studentNames,
    teacherNames,
    studentsCount,
  };
};
