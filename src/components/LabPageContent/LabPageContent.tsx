import LabPageTitle from './components/LabPageTitle/LabPageTitle';
import LabTable from './components/LabTable/LabTable';
import { useLabPageContent } from '@/components/LabPageContent/hooks/useLabPageContent.ts';
import styles from '@styles/components/LabPageContent.module.scss';
import DefaultLoader from '@UI/loaders/DefaultLoader/DefaultLoader.tsx';

export default function LabPageContent() {
  const { isLoading, labs, fetchLabs } = useLabPageContent();

  return (
    <div className={styles.container}>
      <LabPageTitle onUpdate={fetchLabs} />
      {isLoading ? <DefaultLoader /> : <LabTable laboratories={labs} />}
    </div>
  );
}
