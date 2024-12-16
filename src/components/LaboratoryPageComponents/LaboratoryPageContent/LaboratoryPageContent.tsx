import styles from '@styles/components/LaboratoryPageContent.module.scss';
import LaboratoryPageTitle from '../LaboratoryPageTitle/LaboratoryPageTitle.tsx';
import LaboratoryDeadLine from '../LaboratoryDeadLine/LaboratoryDeadLine.tsx';
import LaboratoryDescription from '../LaboratoryDescription/LaboratoryDescription.tsx';
import LaboratoryAttachedTests from '../LaboratoryAttachedTests/LaboratoryAttachedTests.tsx';
import ModalEditLab from '@/components/modals/ModalEditLab/ModalEditLab.tsx';
import ModalSubmitDelete from '@/components/modals/ModalSubmitDelete/ModalSubmitDelete.tsx';
import { useLaboratory } from './hooks/useLaboratory.ts';
import { useLaboratoryPageContent } from './hooks/useLaboratoryPageContent.ts';
import DefaultLoader from '@/UI/loaders/DefaultLoader/DefaultLoader.tsx';

interface LaboratoryPageContentProps {
  id: string;
}

export default function LaboratoryPageContent({
  id,
}: LaboratoryPageContentProps) {
  const { laboratory, isLoading, isError, onEditLab } = useLaboratory(id);

  const {
    isModalVisible,
    setModalVisible,
    modalType,
    setModalType,
    deleteLaboratory,
  } = useLaboratoryPageContent(id);

  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <DefaultLoader />
      </div>
    );
  }

  if (isError) {
    return <div>{isError}</div>;
  }

  if (!laboratory) {
    return <div>Лабораторная не найдена</div>;
  }

  return (
    <div className={styles.wrapper}>
      <LaboratoryPageTitle
        name={laboratory.name}
        id={id}
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
      {laboratory.tests && laboratory.tests.length ? (
        <LaboratoryAttachedTests tests={laboratory.tests} />
      ) : null}
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
        onUpdate={() => {
          setModalVisible(false);
          onEditLab();
        }}
      />
    </div>
  );
}
