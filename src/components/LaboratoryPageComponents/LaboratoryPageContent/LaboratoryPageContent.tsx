import styles from '@styles/components/LaboratoryPageContent.module.scss';
import { Laboratory } from '../../../types/Laboratory.ts';
import LaboratoryPageTitle from '../LaboratoryPageTitle/LaboratoryPageTitle.tsx';
import LaboratoryDeadLine from '../LaboratoryDeadLine/LaboratoryDeadLine.tsx';
import LaboratoryDescription from '../LaboratoryDescription/LaboratoryDescription.tsx';
import LaboratoryAttachedTests from '../LaboratoryAttachedTests/LaboratoryAttachedTests.tsx';
import { Test } from '@/types/Test.ts';
import ModalEditLab from '@/components/modals/ModalEditLab/ModalEditLab.tsx';
import { useState } from 'react';

interface LaboratoryPageContentProps {
  laboratory: Laboratory;
  tests: Test[];
}

export default function LaboratoryPageContent({
  laboratory,
  tests,
}: LaboratoryPageContentProps) {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={styles.wrapper}>
      <LaboratoryPageTitle
        name={laboratory.name}
        handleOpenModal={handleOpenModal}
      />
      <LaboratoryDeadLine deadline={laboratory.deadline} />
      <LaboratoryDescription description={laboratory.description} />
      {tests && tests.length ? <LaboratoryAttachedTests tests={tests} /> : null}
      <ModalEditLab
        laboratory={laboratory}
        displayed={isModalVisible}
        onClose={handleCloseModal}
      />
    </div>
  );
}
