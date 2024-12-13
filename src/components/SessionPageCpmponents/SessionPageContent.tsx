import { useParams } from 'react-router-dom';
import ExecutionHistory from './components/ExecutionHistory/ExecutionHistory';
import SessionPageTitle from './components/SessionPageTitle/SessionPageTitle';
import styles from '@styles/components/SessionPageStyles/SessionPageContent.module.scss';
import { useSessionPageContent } from './hooks/useSessionPageContent';
import ModalUploadAttempt from '../modals/ModalUploadAttempt/ModalUploadAttempt';
import DefaultLoader from '@/UI/loaders/DefaultLoader/DefaultLoader';

export default function SessionPageContent() {
  const { id } = useParams<{ id: string }>();
  const {
    session,
    isError,
    error,
    isLoading,
    isModalVisible,
    setModalVisible,
  } = useSessionPageContent(id);

  if (isLoading) {
    return <DefaultLoader />;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  if (!session || !id) {
    return <div>Сессия сдачи не найдена</div>;
  }

  return (
    <div className={styles.container}>
      <SessionPageTitle
        name={session.laboratory.name}
        status="К выполнению"
        id={id}
        onUpload={() => setModalVisible(true)}
      />
      <ExecutionHistory attempts={session.attempts} />
      <ModalUploadAttempt
        displayed={isModalVisible}
        id={id}
        onPrevent={() => setModalVisible(false)}
        onUpload={() => {
          setModalVisible(false);
        }}
      />
    </div>
  );
}
