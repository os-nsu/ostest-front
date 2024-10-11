import styles from '@styles/components/LaboratoryPageContent.module.scss';
import { Laboratory } from '../../../types/Laboratory.ts';
import LaboratoryPageTitle from '../LaboratoryPageTitle/LaboratoryPageTitle.tsx';
import LaboratoryDeadLine from '../LaboratoryDeadLine/LaboratoryDeadLine.tsx';
import LaboratoryDescription from '../LaboratoryDescription/LaboratoryDescription.tsx';
import LaboratoryAttachedTests from '../LaboratoryAttachedTests/LaboratoryAttachedTests.tsx';

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
      <LaboratoryPageTitle name={laboratory.name} />
      <LaboratoryDeadLine deadline={laboratory.deadline} />
      <LaboratoryDescription description={laboratory.description} />
      <LaboratoryAttachedTests tests={tests} />
    </div>
  );
}
