import { FilterType } from '../../hooks/useSessionsPageContent';
import SessionsFilter from '../SessionsFilter/SessionsFilter';
import styles from '@styles/components/SessionsPageStyles/SessionsPageTitle.module.scss';

interface SessionsPageTitleProps {
  title: string;
  isFilter?: boolean;
  setFilter: (options: FilterType) => void;
  filter: string;
}

export default function SessionsPageTitle({
  title,
  isFilter = false,
  setFilter,
  filter,
}: SessionsPageTitleProps) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      {isFilter ? (
        <SessionsFilter onFilterChange={setFilter} filter={filter} />
      ) : undefined}
    </div>
  );
}
