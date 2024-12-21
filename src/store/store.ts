import { combineReducers, configureStore, Tuple } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import sessionsReducer from './sessions/sessionsSlice';
import userReducer from './user/userSlise';
import roleReducer from './role/roleSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['role'],
};

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  user: userReducer,
  role: roleReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => new Tuple(thunk),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ThunkApiConfig = {
  state: RootState;
  dispatch: AppDispatch;
};
