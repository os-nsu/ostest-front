import { AxiosClient } from '@/providers/AxiosClient/AxiosClient.ts';
import {
  LaboratoryPostRequestData,
  LaboratoryPutRequestData,
  LaboratoryResponseData,
  LaboratorySearchRequestData,
} from '@/DTO/LaboratoryDTO.ts';
import { MinimizedLaboratory } from '@/types/Laboratory.ts';

export class LaboratoryProvider {
  instance: AxiosClient;
  baseURL: string;

  constructor() {
    this.baseURL = `${import.meta.env.VITE_SERVER_DOMAIN}/api/laboratory`;
    this.instance = new AxiosClient({ baseURL: this.baseURL });
  }

  editLaboratory(requestData: LaboratoryPutRequestData) {
    return this.instance.put<LaboratoryResponseData>('', requestData);
  }

  addLaboratory(requestData: LaboratoryPostRequestData) {
    return this.instance.post<LaboratoryResponseData>('', requestData);
  }

  searchLaboratories(requestData: LaboratorySearchRequestData) {
    return this.instance.post<MinimizedLaboratory[]>('/search', requestData);
  }

  getLaboratory(id: string) {
    return this.instance.get<LaboratoryResponseData>(`/${id}`);
  }

  deleteLaboratory(id: string) {
    return this.instance.delete(`/${id}`);
  }
}
