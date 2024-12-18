import { RoleTypes } from './Role';

export enum GroupFilters {
  ACTIVE = 'active',
  ARCHIVED = 'archived',
  ALL = 'all',
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
  // status: GroupStatus;
  isArchived: boolean;
  users: User[];
}
