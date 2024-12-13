import { SessionsContent } from '@/DTO/SessionDTO';

export type ExtractorKey =
  | 'laboratoryName'
  | 'attemptsCount'
  | 'student'
  | 'group'
  | 'status';

export const useTeacherSessionsList = () => {
  const rowExtractors: Record<
    ExtractorKey,
    (rowData: Omit<SessionsContent, 'user'>) => string
  > = {
    laboratoryName: rowData => rowData.laboratoryName,
    attemptsCount: rowData => rowData.attemptsNumber.toString(),
    student: rowData =>
      rowData.student.secondName + ' ' + rowData.student.firstName,
    group: rowData => rowData.student.group.groupName,
    status: rowData => rowData.status,
  };

  return {
    rowExtractors,
  };
};
