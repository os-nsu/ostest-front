import { SessionsContent } from '@/DTO/SessionDTO';

export type ExtractorKey = 'laboratoryName' | 'attemptsCount' | 'status';

export const useStudentSessionsList = () => {
  const rowExtractors: Record<
    ExtractorKey,
    (rowData: Omit<SessionsContent, 'user'>) => string
  > = {
    laboratoryName: rowData => rowData.laboratoryName,
    attemptsCount: rowData => rowData.attemptsNumber.toString(),
    status: rowData => rowData.status,
  };

  return {
    rowExtractors,
  };
};
