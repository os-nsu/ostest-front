import { AxiosClient } from '@/providers/AxiosClient/AxiosClient.ts';
import { CreateTestRequestData } from '@/DTO/TestDTO.ts';
import { Test } from '@/types/Test.ts';

export class TestProvider {
  instance: AxiosClient;
  baseURL: string;

  constructor() {
    this.baseURL = `${import.meta.env.VITE_SERVER_DOMAIN}/api/test`;
    this.instance = new AxiosClient({ baseURL: this.baseURL });
  }

  createTest(requestData: Omit<CreateTestRequestData, 'id'>) {
    return this.instance.post<Test>('', requestData);
  }

  updateTest(requestData: CreateTestRequestData) {
    return this.instance.put<Test>('', requestData);
  }

  getTestById(id: number) {
    return this.instance.get<Test>(`/${id}`);
  }

  getAllTests() {
    return this.instance.get<Test[]>(`/search`);
  }

  getTestFile(id: number) {
    return this.instance.get<Test>(`/${id}/script`);
  }

  deleteTestById(id: number) {
    return this.instance.delete<Test>(`/${id}`);
  }
}
