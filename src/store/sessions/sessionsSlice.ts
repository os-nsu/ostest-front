import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Session } from '@/types/Session';
import { ThunkApiConfig } from '../store';
import { Attempt, AttemptStatus, TestStatus } from '@/types/Attempt';
import { AttemptPostRequestData } from '@/DTO/SessionDTO';
// import { useSessionProvider } from '@/providers/SessionProvider/useSessionProvider';

export interface SessionsState {
  list: Partial<{ [id: number]: Session }>;
  loading: Partial<{ [id: number]: boolean }>;
  error: Partial<{ [id: number]: string }>;
  attemptDetails: Partial<{ [id: string]: Attempt }>;
}

const initialState: SessionsState = {
  list: {},
  loading: {},
  error: {},
  attemptDetails: {},
};

export const sessionsSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadSession.pending, (state, action) => {
      const id = action.meta.arg;
      state.loading[id] = true;
      state.error[id] = undefined;
    });
    builder.addCase(loadSession.fulfilled, (state, action) => {
      const id = action.meta.arg;
      state.loading[id] = false;
      state.list[id] = action.payload;
    });
    builder.addCase(loadSession.rejected, (state, action) => {
      const id = action.meta.arg;
      state.loading[id] = false;
      state.error[id] = action.error.message;
    });

    // attempt
    builder.addCase(addAtempt.fulfilled, (state, action) => {
      state.list[action.payload.sessionId]?.attempts.push(
        action.payload.attempt,
      );
      state.attemptDetails[action.payload.attempt.id] = action.payload.attempt;
    });
    builder.addCase(getAttempt.fulfilled, (state, action) => {
      state.attemptDetails[action.payload.id] = action.payload;
    });
  },
});

export default sessionsSlice.reducer;

export const loadSession = createAsyncThunk<Session, number, ThunkApiConfig>(
  'sessions/loadSession',
  async (id: number, { getState }) => {
    const state = getState();
    let session = state.sessions.list[id];
    if (!session) {
      // const response = await useSessionProvider().getSession(id);
      // session = response.data;

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

type SaveAttemptRrequest = {
  sessionId: number;
  attempt: AttemptPostRequestData;
};
type SaveAttemptResponse = { sessionId: number; attempt: Attempt };

export const addAtempt = createAsyncThunk<
  SaveAttemptResponse,
  SaveAttemptRrequest,
  ThunkApiConfig
>('sessions/addAtempt', async (payload: SaveAttemptRrequest) => {
  // const response = await useSessionProvider().addAttempt(payload.sessionId, payload.attempt);
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
      // const response = await useSessionProvider().getAttempt(id);
      // attempt = response.data;

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
