import { RoleTypes } from './Role';

export enum GroupStatus {
  ACTIVE = 'Активна',
  INACTIVE = 'Скрыта',
}

export enum GroupFilters {
  ACTIVE = GroupStatus.ACTIVE,
  INACTIVE = GroupStatus.INACTIVE,
  ALL = 'ALL',
}

export interface MinimizedGroup {
  id: number;
  groupName: string;
}

export interface User {
  id: 0;
  username: string;
  firstName: string;
  secondName: string;
  roles: [
    {
      roleName: RoleTypes;
    },
  ];
}

export interface Group {
  id: number;
  name: string;
  status: GroupStatus;
  users: User[];
}
