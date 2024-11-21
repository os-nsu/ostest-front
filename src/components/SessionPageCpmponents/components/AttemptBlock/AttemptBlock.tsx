import styles from '@styles/components/SessionPageStyles/AttemptBlock.module.scss';
import TimeLine from './components/TimeLine/TimeLine';
import BlockAttemptData from './components/BlockAttemptData/BlockAttemptData';

interface AttemptBlockProps {
  number: number;
  status: string;
  onClick?: () => void;
}

export default function AttemptBlock({
  number,
  status,
  onClick,
}: AttemptBlockProps) {
  return (
    <div className={styles.container} onClick={onClick}>
      <TimeLine />
      <BlockAttemptData number={number} status={status} />
    </div>
  );
}
