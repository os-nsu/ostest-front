import { useState } from 'react';

export const useExecutionHistoryList = () => {
  const [selectedAttemptId, setSelectedAttemptId] = useState<string | null>(
    null,
  );
  const [selectedAttemptSequenceOrder, setSelectedAttemptSequenceOrder] =
    useState<number>();

  const handleAttemptClick = (attemptNumber: string, sequenceOrder: number) => {
    setSelectedAttemptId(prev =>
      prev === attemptNumber ? null : attemptNumber,
    );
    setSelectedAttemptSequenceOrder(sequenceOrder);
  };

  const handleClose = () => {
    setSelectedAttemptId(null);
  };

  return {
    selectedAttemptId,
    selectedAttemptSequenceOrder,
    handleAttemptClick,
    handleClose,
  };
};
