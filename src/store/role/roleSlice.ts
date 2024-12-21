import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoleTypes } from '@/types/Role';

interface RoleState {
  role: RoleTypes | null;
}

const initialState: RoleState = {
  role: null,
};

export const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<RoleTypes | null>) => {
      state.role = action.payload;
    },
    removeRole: state => {
      state.role = null;
    },
  },
});

export const { setRole, removeRole } = roleSlice.actions;
export default roleSlice.reducer;
