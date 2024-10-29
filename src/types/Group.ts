export enum GroupStatus {
  ACTIVE = 'Активна',
  INACTIVE = 'Скрыта',
}

export interface Group {
  id: number;
  name: string;
  studentsCount: number;
  teacher: string;
  status: GroupStatus;
}
