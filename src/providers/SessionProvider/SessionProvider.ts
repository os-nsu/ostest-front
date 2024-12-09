import {
  AttemptPostRequestData,
  SessionPostRequestData,
  SessionsGetRequestData,
  SessionsGetResponseData,
} from '@/DTO/SessionDTO';
import { AxiosClient } from '@/providers/AxiosClient/AxiosClient.ts';
import { Attempt } from '@/types/Attempt';
import { Session } from '@/types/Session';

export class SessionProvider {
  instance: AxiosClient;
  baseURL: string;

  constructor() {
    this.baseURL = `${import.meta.env.VITE_SERVER_DOMAIN}/api/session`;
    this.instance = new AxiosClient({ baseURL: this.baseURL });
  }

  getSession(id: number) {
    return this.instance.get<Session>(`/${id}`);
  }

  addAttempt(id: number, requestData: AttemptPostRequestData) {
    return this.instance.post<Attempt>(`/${id}/attempt`, requestData);
  }

  getAttempt(id: string) {
    return this.instance.get<Attempt>(`/attempt/${id}`);
  }

  getAttempts(id: number, { page, size, sort }: SessionsGetRequestData) {
    return this.instance.get<SessionsGetResponseData>(
      `/user/${id}?page=${page}&size=${size}&sort=${sort}`,
    );
  }

  getExistingSession(requestData: SessionPostRequestData) {
    return this.instance.post<Session>('/lab-student', requestData);
  }

  startSession(requestData: SessionPostRequestData) {
    return this.instance.post<Session>('/start', requestData);
  }
}
