import { AxiosClient } from '@/providers/AxiosClient/AxiosClient.ts';
import {
  GroupPostRequestData,
  GroupPutRequestData,
  GroupSearchRequestData,
  GroupSearchResponseData,
} from '@/DTO/GroupDTO';
import { Group, MinimizedGroup } from '@/types/Group';

export class GroupProvider {
  instance: AxiosClient;
  baseURL: string;

  constructor() {
    this.baseURL = `${import.meta.env.VITE_SERVER_DOMAIN}/api/group`;
    this.instance = new AxiosClient({ baseURL: this.baseURL });
  }

  editGroup(requestData: GroupPutRequestData) {
    return this.instance.put<MinimizedGroup>('', requestData);
  }

  addGroup(requestData: GroupPostRequestData) {
    return this.instance.post<MinimizedGroup>('', requestData);
  }

  searchGroups({ page, size, sort }: GroupSearchRequestData) {
    return this.instance.get<GroupSearchResponseData>(
      `/search?page=${page}&size=${size}&sort=${sort}`,
    );
  }

  getGroup(id: string) {
    return this.instance.get<Group>(`/${id}`);
  }

  deleteGroup(id: string) {
    return this.instance.delete(`/${id}`);
  }
}
