import { MinimizedGroup } from '@/types/Group';

export interface GroupPostRequestData {
  [index: string]: unknown;
  groupName: string;
  isArchived: boolean;
}

export interface GroupPutRequestData {
  [index: string]: unknown;
  id: number;
  name: string;
  addUsers: number[];
  deleteUsers: number[];
}

export interface GroupSearchRequestData {
  [index: string]: unknown;
  page: number;
  size: number;
  sort?: string;
}

export interface GroupSearchResponseData {
  content: MinimizedGroup[];
  totalElements: number;
  totalPages: number;
  last: boolean;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
}
