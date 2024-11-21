import { useParams } from 'react-router-dom';
import ExecutionHistory from './components/ExecutionHistory/ExecutionHistory';
import SessionPageTitle from './components/SessionPageTitle/SessionPageTitle';
import styles from '@styles/components/SessionPageStyles/SessionPageContent.module.scss';
import { useSessionPageContent } from './hooks/useSessionPageContent';
import ModalDownloadAttempt from '../modals/ModalDownloadAttempt/ModalDownloadAttempt';

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
    return <div>Загрузка...</div>;
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
        name={session.labarotory.name}
        status="К выполнению"
        id={id}
        onDownload={() => setModalVisible(true)}
      />
      <ExecutionHistory attempts={session.attempts} />
      <ModalDownloadAttempt
        displayed={isModalVisible}
        id={id}
        onPrevent={() => setModalVisible(false)}
        onDownload={() => {
          setModalVisible(false);
        }}
      />
    </div>
  );
}
