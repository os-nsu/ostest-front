import { SessionProvider } from './SessionProvider';

const provider = new SessionProvider();

export const useSessionProvider = () => provider;
