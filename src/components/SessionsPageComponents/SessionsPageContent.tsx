import SessionsPageTitle from './components/SessionsPageTitle/SessionsPageTitle';
import styles from '@styles/components/SessionsPageStyles/SessionsPageContent.module.scss';
import { useSessionsPageContent } from './hooks/useSessionsPageContent';
import StudentSessionsList from './components/StudentSessionsList/StudentSessionsList';
import TeacherSessionsList from './components/TeacherSessionsList/TeacherSessionsList';
import PaginationButtons from '../PaginationButtons/PaginationButtons';

export default function SessionsPageContent() {
  const {
    attempts,
    role,
    filter,
    title,
    isFilter,
    isLoading,
    isFirstPage,
    isLastPage,
    handleNextPage,
    handlePrevPage,
    loadAttempts,
    setFilter,
    filteredAttempts,
  } = useSessionsPageContent();

  return (
    <div className={styles.container}>
      <SessionsPageTitle
        title={title}
        isFilter={isFilter}
        setFilter={setFilter}
        filter={filter}
      />
      {role === 'STUDENT' ? (
        <StudentSessionsList attempts={attempts} />
      ) : (
        <TeacherSessionsList attempts={filteredAttempts()} />
      )}
      <PaginationButtons
        isLoading={isLoading}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        loadPage={loadAttempts}
      />
    </div>
  );
}
