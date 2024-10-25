import styles from '@styles/components/LaboratoryPageContent.module.scss';
import { Laboratory } from '../../../types/Laboratory.ts';
import LaboratoryPageTitle from '../LaboratoryPageTitle/LaboratoryPageTitle.tsx';
import LaboratoryDeadLine from '../LaboratoryDeadLine/LaboratoryDeadLine.tsx';
import LaboratoryDescription from '../LaboratoryDescription/LaboratoryDescription.tsx';
import LaboratoryAttachedTests from '../LaboratoryAttachedTests/LaboratoryAttachedTests.tsx';
import { Test } from '@/types/Test.ts';
import ModalEditLab from '@/components/modals/ModalEditLab/ModalEditLab.tsx';
import ModalSubmitDelete from '@/components/modals/ModalSubmitDelete/ModalSubmitDelete.tsx';
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
  const {
    isModalVisible,
    setModalVisible,
    modalType,
    setModalType,
    deleteLaboratory,
  } = useLaboratoryPageContent(id);

  return (
    <div className={styles.wrapper}>
      <LaboratoryPageTitle
        name={laboratory.name}
        onDelete={() => {
          setModalVisible(true);
          setModalType('delete');
        }}
        onEdit={() => {
          setModalType('edit');
          setModalVisible(true);
        }}
      />
      {laboratory.deadline ? (
        <LaboratoryDeadLine deadline={laboratory.deadline} />
      ) : null}
      <LaboratoryDescription description={laboratory.description} />
      {tests && tests.length ? <LaboratoryAttachedTests tests={tests} /> : null}
      <ModalSubmitDelete
        displayed={isModalVisible && modalType === 'delete'}
        name={laboratory.name}
        id={id}
        onPrevent={() => setModalVisible(false)}
        onSubmit={deleteLaboratory}
      />
      <ModalEditLab
        laboratory={laboratory}
        displayed={isModalVisible && modalType === 'edit'}
        onPrevent={() => setModalVisible(false)}
      />
    </div>
  );
}
