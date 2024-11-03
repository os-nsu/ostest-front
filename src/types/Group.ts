export enum GroupStatus {
  ACTIVE = 'Активна',
  INACTIVE = 'Скрыта',
}

export enum GroupFilters {
  ACTIVE = GroupStatus.ACTIVE,
  INACTIVE = GroupStatus.INACTIVE,
  ALL = 'ALL',
}

export interface Group {
  id: number;
  name: string;
  studentsCount: number;
  teacher: string;
  status: GroupStatus;
}
