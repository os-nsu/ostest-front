import styles from '@styles/components/Lab.module.scss';
import { Laboratory } from '../../../types/Laboratory.ts';
import IconButton from '@/UI/buttons/IconButton.tsx';
import IconPebcil from '@public/pencil_line.svg';
import IconTrash from '@public/trash.svg';
import IconLeft from '@public/chevron-left.svg';

interface LaboratoryPageContentProps {
  laboratory: Laboratory;
  tests: string[];
}

export default function LaboratoryPageContent({
  laboratory,
  tests,
}: LaboratoryPageContentProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.nameContainer}>
          <IconButton icon={IconLeft} onClick={() => window.history.back()} />
          <div>{laboratory.name}</div>
        </div>
        <div className={styles.buttons}>
          <IconButton icon={IconPebcil} onClick={() => {}} />
          <IconButton icon={IconTrash} onClick={() => {}} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Срок выполнения</div>
        <div className={styles.content}>
          до {new Date(laboratory.deadline).toLocaleDateString('ru-RU')}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Описание</div>
        <div className={styles.content}>{laboratory.description}</div>
      </div>
      {tests.length > 0 && (
        <div className={styles.container}>
          <div className={styles.title}>Прикрепленные тесты</div>
          <ul>
            {tests.map((test, index) => (
              <li className={styles.content} key={index}>
                {test}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
