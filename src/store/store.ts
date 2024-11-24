import { configureStore, Tuple } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import sessionsReducer from './sessions/sessionsSlice';
import userReducer from './user/userSlise';

export const store = configureStore({
  reducer: {
    sessions: sessionsReducer,
    user: userReducer,
  },
  middleware: () => new Tuple(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ThunkApiConfig = {
  state: RootState;
  dispatch: AppDispatch;
};
