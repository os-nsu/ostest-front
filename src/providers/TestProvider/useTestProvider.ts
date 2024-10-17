import { TestProvider } from '@/providers/TestProvider/TestProvider.ts';

const provider = new TestProvider();

export const useTestProvider = () => provider;
