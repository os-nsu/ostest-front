import styles from '@styles/components/LaboratoryPageContent.module.scss';
import { Laboratory } from '../../../types/Laboratory.ts';
import LaboratoryPageTitle from '../LaboratoryPageTitle/LaboratoryPageTitle.tsx';
import LaboratoryDeadLine from '../LaboratoryDeadLine/LaboratoryDeadLine.tsx';
import LaboratoryDescription from '../LaboratoryDescription/LaboratoryDescription.tsx';
import LaboratoryAttachedTests from '../LaboratoryAttachedTests/LaboratoryAttachedTests.tsx';
import { Test } from '@/types/Test.ts';
import ModalSubmitDelete from '@/components/modals/ModalSubmitDelete/ModalSubmitDelete.tsx';
import { useState } from 'react';
import { useLaboratoryPageContent } from './hooks/useLaboratoryPageContent.ts';

interface LaboratoryPageContentProps {
  laboratory: Laboratory;
  id?: string;
  tests: Test[];
}

export default function LaboratoryPageContent({
  laboratory,
  tests,
  id,
}: LaboratoryPageContentProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const { deleteLaboratory } = useLaboratoryPageContent(id);

  return (
    <div className={styles.wrapper}>
      <LaboratoryPageTitle
        name={laboratory.name}
        onPrevent={() => setModalVisible(true)}
      />
      <LaboratoryDeadLine deadline={laboratory.deadline} />
      <LaboratoryDescription description={laboratory.description} />
      {tests && tests.length ? <LaboratoryAttachedTests tests={tests} /> : null}
      <ModalSubmitDelete
        displayed={isModalVisible}
        name={laboratory.name}
        id={id}
        onPrevent={() => setModalVisible(false)}
        onSubmit={deleteLaboratory}
      />
    </div>
  );
}
