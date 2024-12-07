import { User } from '@/types/User';

export interface Filter {
  fieldName: string;
  exactSearch: boolean;
  type: string;
  value: string;
}

export interface Pagination {
  index: number;
  pageSize: number;
  totalRecords: number;
  totalPages: number;
}

export interface UserSearchRequestData {
  [index: string]: unknown;
  filters: Filter[];
  pagination: Pagination;
}

export interface UserSearchResponseData {
  pagination: Pagination;
  users: User[];
}
