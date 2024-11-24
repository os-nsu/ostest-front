import { AxiosClient } from '@/providers/AxiosClient/AxiosClient.ts';
import { User } from '@/types/User';

export class UserProvider {
  instance: AxiosClient;
  baseURL: string;

  constructor() {
    this.baseURL = `${import.meta.env.VITE_SERVER_DOMAIN}/api/user`;
    this.instance = new AxiosClient({ baseURL: this.baseURL });
  }

  getCurrentUser() {
    return this.instance.get<User>('/me');
  }
}
