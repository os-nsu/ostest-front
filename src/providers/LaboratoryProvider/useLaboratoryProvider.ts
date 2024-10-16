import { LaboratoryProvider } from '@/providers/LaboratoryProvider/LaboratoryProvider.ts';

const provider = new LaboratoryProvider();

export const useLaboratoryProvider = () => provider;
