import { configureStore, Tuple } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import sessionsReducer from './sessions/sessionsSlice';

export const store = configureStore({
  reducer: {
    sessions: sessionsReducer,
  },
  middleware: () => new Tuple(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ThunkApiConfig = {
  state: RootState;
  dispatch: AppDispatch;
};
