import { createSlice } from '@reduxjs/toolkit';
import { loadSession, addAttempt, getAttempt } from './sessionsThunks';
import { Session } from '@/types/Session';
import { Attempt } from '@/types/Attempt';

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

    builder.addCase(addAttempt.fulfilled, (state, action) => {
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
