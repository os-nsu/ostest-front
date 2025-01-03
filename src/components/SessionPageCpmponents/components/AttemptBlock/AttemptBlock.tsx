import styles from '@styles/components/SessionPageStyles/AttemptBlock.module.scss';
import TimeLine from './components/TimeLine/TimeLine';
import BlockAttemptData from './components/BlockAttemptData/BlockAttemptData';
import { AttemptStatus } from '@/types/Attempt';

interface AttemptBlockProps {
  number: number;
  status: AttemptStatus;
  attemptId: string;
  onClick?: () => void;
}

export default function AttemptBlock({
  number,
  status,
  attemptId,
  onClick,
}: AttemptBlockProps) {
  return (
    <div className={styles.container} onClick={onClick}>
      <TimeLine />
      <BlockAttemptData number={number} status={status} attemptId={attemptId} />
    </div>
  );
}
