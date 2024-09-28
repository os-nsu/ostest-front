import { AxiosClient } from '@/providers/AxiosClient/AxiosClient.ts';
import { LoginRequestData, LoginResponseData } from '@/DTO/AuthDTO.ts';

export class AuthProvider {
  baseURL: string;
  instance: AxiosClient;

  constructor() {
    this.baseURL = '';
    this.instance = new AxiosClient({ baseURL: this.baseURL });
  }

  login(data: LoginRequestData) {
    return this.instance.post<LoginResponseData>('', data);
  }
}
