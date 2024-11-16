import { useParams } from 'react-router-dom';
import ExecutionHistory from './components/ExecutionHistory/ExecutionHistory';
import SessionPageTitle from './components/SessionPageTitle/SessionPageTitle';
import styles from '@styles/components/SessionPageStyles/SessionPageContent.module.scss';
import { useSessionPageContent } from './hooks/useSessionPageContent';
import ModalDownloadSolution from '../modals/ModalDownloadSolution/ModalDownloadSolution';

export default function SessionPageContent() {
  const { id } = useParams<{ id: string }>();
  const { isError, isLoading, isModalVisible, setModalVisible, mock } =
    useSessionPageContent(id);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>{isError}</div>;
  }

  if (!mock || !id) {
    return <div>Сессия сдачи не найдена</div>;
  }

  return (
    <div className={styles.container}>
      <SessionPageTitle
        name={mock.labarotory.name}
        status="К выполнению"
        id={id}
        onDownload={() => setModalVisible(true)}
      />
      <ExecutionHistory attempts={mock.attempts} />
      <ModalDownloadSolution
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
