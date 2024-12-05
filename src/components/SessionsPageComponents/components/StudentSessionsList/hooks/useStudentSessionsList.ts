import { SessionsContent } from '@/DTO/SessionDTO';
import { ProcessStatus } from '@/types/ProcessStatus';
import { SessionStatus } from '@/types/Session';

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

  const sessionStatusToProcessMapping: Record<
    SessionStatus,
    { processStatus: ProcessStatus; label?: string }
  > = {
    [SessionStatus.NEW]: { processStatus: ProcessStatus.TODO },
    [SessionStatus.INACTIVE]: {
      processStatus: ProcessStatus.TODO,
      label: 'Неактивна',
    },
    [SessionStatus.IN_PROGRESS]: { processStatus: ProcessStatus.INPROGRESS },
    [SessionStatus.DONE]: { processStatus: ProcessStatus.SUCCESS },
    [SessionStatus.SUCCESS]: { processStatus: ProcessStatus.SUCCESS },
    [SessionStatus.FAILURE]: { processStatus: ProcessStatus.ERROR },
  };

  const adaptSessionStatusToProcessStatus = (
    status: SessionStatus,
  ): { processStatus: ProcessStatus; label?: string } => {
    return (
      sessionStatusToProcessMapping[status] || {
        processStatus: ProcessStatus.TODO,
      }
    );
  };

  return {
    rowExtractors,
    adaptSessionStatusToProcessStatus,
  };
};
