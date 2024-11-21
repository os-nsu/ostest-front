import IconButton from '@/UI/buttons/IconButton/IconButton';
import IconClose from '@/UI/icons/IconClose/IconClose';
import styles from '@styles/components/AttemptResult.module.scss';
import TestResult from './TestResult/TestResult';
import { useAttemptResult } from './hooks/useAttemptResult';

interface AttemptResultProps {
  number?: number;
  attemptId: string;
  onClose: () => void;
}

export default function AttemptResult({
  number,
  attemptId,
  onClose,
}: AttemptResultProps) {
  const { attempt } = useAttemptResult(attemptId);

  if (!attempt) {
    return <div>Ошибка</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>Результат: Запуск #{number}</span>
        <IconButton
          icon={IconClose({ color: 'black' })}
          type="no_bg"
          onClick={onClose}
        />
      </div>
      <div className={styles.testsContainer}>
        <TestResult
          testNumber={1}
          memory="5"
          time="123"
          status="Не пройден"
          description="Тест завершился с ошибкой и в этом блоке будет описана причина ее возникновения"
        />
        <TestResult
          testNumber={2}
          memory="5"
          time="123"
          status="Пройден"
          description="Тест был пройден и в этом блоке возможно  будет какая-то полезная информация, но не факт"
        />
      </div>
    </div>
  );
}
