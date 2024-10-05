import axios from 'axios';
import type { AxiosInstance, HeadersDefaults, AxiosRequestConfig } from 'axios';

interface AxiosClientProps {
  baseURL: string;
  headers?: HeadersDefaults;
}

export class AxiosClient {
  instance: AxiosInstance;

  constructor({ baseURL, headers }: AxiosClientProps) {
    this.instance = axios.create({ baseURL: baseURL, headers });

    this.instance.interceptors.request.use(config => {
      config.headers['Authorization'] =
        `Bearer ${localStorage.getItem('accessToken')}`;
      return config;
    });
  }

  get<Response>(path = '', requestData: AxiosRequestConfig = {}) {
    return this.instance.get<Response>(path, requestData);
  }

  post<Response>(path = '', data?: Record<string, unknown>) {
    return this.instance.post<Response>(path, data);
  }

  put<Response>(path = '', data: Record<string, unknown>) {
    return this.instance.put<Response>(path, data);
  }

  delete<Response>(path = '', requestData: AxiosRequestConfig = {}) {
    return this.instance.delete<Response>(path, requestData);
  }
}
