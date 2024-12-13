import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from '../store';
import { Session } from '@/types/Session';
import { Attempt } from '@/types/Attempt';
import { AttemptPostRequestData } from '@/DTO/SessionDTO';
import { useSessionProvider } from '@/providers/SessionProvider/useSessionProvider';

export const loadSession = createAsyncThunk<Session, number, ThunkApiConfig>(
  'sessions/loadSession',
  async (id: number, { getState }) => {
    const state = getState();
    let session = state.sessions.list[id];

    if (!session) {
      const response = await useSessionProvider().getSession(id);
      session = response.data;
    }

    return session;
  },
);

type SaveAttemptRequest = {
  sessionId: number;
  attempt: AttemptPostRequestData;
};
type SaveAttemptResponse = { sessionId: number; attempt: Attempt };

export const addAttempt = createAsyncThunk<
  SaveAttemptResponse,
  SaveAttemptRequest,
  ThunkApiConfig
>('sessions/addAttempt', async (payload: SaveAttemptRequest) => {
  const response = await useSessionProvider().addAttempt(
    payload.sessionId,
    payload.attempt,
  );

  return {
    sessionId: payload.sessionId,
    attempt: response.data,
  };
});

export const getAttempt = createAsyncThunk<Attempt, string, ThunkApiConfig>(
  'sessions/getAttempt',
  async (id: string, { getState }) => {
    const state = getState();
    let attempt = state.sessions.attemptDetails[id];

    if (!attempt) {
      const response = await useSessionProvider().getAttempt(id);
      attempt = response.data;
    }

    return attempt;
  },
);
