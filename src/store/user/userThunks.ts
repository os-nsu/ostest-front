import { User } from '@/types/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from '../store';
import { useUserProvider } from '@/providers/UserProvider/useUserProvider';

export const getCurrentUser = createAsyncThunk<User, void, ThunkApiConfig>(
  'user/getCurrentUser',
  async (_, { getState }) => {
    const state = getState();
    let user = state.user.user;

    if (!user) {
      const response = await useUserProvider().getCurrentUser();
      user = response.data;
    }

    return user;
  },
);
