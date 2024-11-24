import { UserProvider } from './UserProvider';

const provider = new UserProvider();

export const useUserProvider = () => provider;
