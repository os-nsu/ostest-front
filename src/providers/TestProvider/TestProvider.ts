import { AxiosClient } from '@/providers/AxiosClient/AxiosClient.ts';
import { MinimizedTest, Test } from '@/types/Test.ts';

export class TestProvider {
  instance: AxiosClient;
  baseURL: string;

  constructor() {
    this.baseURL = `${import.meta.env.VITE_SERVER_DOMAIN}/api/test`;
    this.instance = new AxiosClient({ baseURL: this.baseURL });
  }

  createTest(requestData: FormData) {
    return this.instance.post<Test>('', requestData, {
      data: requestData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  updateTest(requestData: FormData) {
    return this.instance.put<Test>('', requestData, {
      data: requestData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  getTestById(id: number) {
    return this.instance.get<Test>(`/${id}`);
  }

  getAllTests() {
    return this.instance.get<MinimizedTest[]>(`/search`);
  }

  getTestFile(id: number) {
    return this.instance.get<Test>(`/${id}/script`);
  }

  deleteTestById(id: number) {
    return this.instance.delete<Test>(`/${id}`);
  }
}
