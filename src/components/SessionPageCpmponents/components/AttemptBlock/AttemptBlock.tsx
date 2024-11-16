import styles from '@styles/components/SessionPageStyles/AttemptBlock.module.scss';
import TimeLine from './components/TimeLine/TimeLine';
import BlockAttemptData from './components/BlockAttemptData/BlockAttemptData';

interface AttemptBlockProps {
  number: number;
  status: string;
}

export default function AttemptBlock({ number, status }: AttemptBlockProps) {
  return (
    <div className={styles.container}>
      <TimeLine />
      <BlockAttemptData number={number} status={status} />
    </div>
  );
}
