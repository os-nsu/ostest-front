import { RootState } from '../store';

export const selectRole = (state: RootState) => state.role.role;