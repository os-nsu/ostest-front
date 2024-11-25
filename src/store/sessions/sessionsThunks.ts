import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from '../store';
import { Session } from '@/types/Session';
import { Attempt, AttemptStatus, TestStatus } from '@/types/Attempt';
import { AttemptPostRequestData } from '@/DTO/SessionDTO';

export const loadSession = createAsyncThunk<Session, number, ThunkApiConfig>(
  'sessions/loadSession',
  async (id: number, { getState }) => {
    const state = getState();
    let session = state.sessions.list[id];
    if (!session) {
      session = {
        id: 0,
        labarotory: {
          name: 'string',
        },
        attempts: [
          {
            id: '1',
            sequenceOrder: 1,
            status: AttemptStatus.FAILURE,
          },
          {
            id: '2',
            sequenceOrder: 2,
            status: AttemptStatus.ERROR,
          },
          {
            id: '3',
            sequenceOrder: 3,
            status: AttemptStatus.SUCCESS,
          },
        ],
      };
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
  const response: { data: Attempt } = {
    data: {
      id: '1',
      branch: payload.attempt.branch,
      testResults: { status: TestStatus.SUCCESS },
      sequenceOrder: 3,
      status: AttemptStatus.IN_PROGRESS,
      repositoryUrl: payload.attempt.repositoryUrl,
    },
  };
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
      attempt = {
        id: `${id}`,
        branch: 'sdfgfg',
        testResults: { status: TestStatus.SUCCESS },
        sequenceOrder: 3,
        status: AttemptStatus.IN_PROGRESS,
        repositoryUrl: 'sdfg',
      };
    }
    return attempt;
  },
);
