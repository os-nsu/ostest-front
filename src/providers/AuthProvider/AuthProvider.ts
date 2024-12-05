import { AxiosClient } from '@/providers/AxiosClient/AxiosClient.ts';
import {
  LoginRequestData,
  LoginResponseData,
  UpdateSessionResponseData,
} from '@/DTO/AuthDTO.ts';
import { RoleTypes } from '@/types/Role';

export class AuthProvider {
  instance: AxiosClient;
  baseURL: string;

  constructor() {
    this.baseURL = `${import.meta.env.VITE_SERVER_DOMAIN}/api/v1`;
    this.instance = new AxiosClient({ baseURL: this.baseURL });
  }

  login(requestData: LoginRequestData) {
    return this.instance.post<LoginResponseData>('/login', requestData);
  }

  updateAccessToken(refreshToken: string) {
    return this.instance.post<UpdateSessionResponseData>('/auth/token', {
      refreshToken,
    });
  }

  getRoleFromToken(): RoleTypes[] | null {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      console.error('Токен не найден в localStorage.');
      return null;
    }

    try {
      const base64Payload = token.split('.')[1];
      const decodedPayload = atob(base64Payload);
      const roles = JSON.parse(decodedPayload).roles;

      return roles.length > 0 ? roles : null;
    } catch (error) {
      console.error('Ошибка при декодировании токена:', error);
      return null;
    }
  }
}
