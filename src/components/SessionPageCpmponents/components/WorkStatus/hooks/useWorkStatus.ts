import styles from '@styles/components/SessionPageStyles/WorkState.module.scss';

export const useWorkStatus = (status: string) => {
  let statusClass: string;
  if (status === 'К выполнению') statusClass = styles.execution;
  else if (status === 'Выполнено') statusClass = styles.success;
  else if (status === 'В процессе') statusClass = styles.progress;
  else statusClass = styles.default;

  return { statusClass };
};
