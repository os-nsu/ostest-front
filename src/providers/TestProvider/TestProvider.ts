import { AxiosClient } from '@/providers/AxiosClient/AxiosClient.ts';

export class TestProvider {
  instance: AxiosClient;
  baseURL: string;

  constructor() {
    this.baseURL = `${import.meta.env.VITE_SERVER_DOMAIN}/api/v1`;
    this.instance = new AxiosClient({ baseURL: this.baseURL });
  }

  createTest() {}

  updateTest() {}

  getTestById() {}

  getAllTests() {}

  deleteTestById() {}
}
