import IconButton from '@/UI/buttons/IconButton/IconButton';
import DefaultDropdown from '@/UI/inputs/DefaultDropdown/DefaultDropdown';
import IconRight from '@public/chevron_right.svg';
import IconBottom from '@public/chevron_bottom.svg';
import styles from '@styles/components/SessionsPageStyles/SessionsFilter.module.scss';
import { useState } from 'react';
import { useSessionsFilter } from './hooks/useSessionsFilter';
import { FilterType } from '../../hooks/useSessionsPageContent';

export interface SessionsFilterProps {
  onFilterChange: (filter: FilterType) => void;
  filter: string;
}

export default function SessionsFilter({
  onFilterChange,
  filter,
}: SessionsFilterProps) {
  const [isFilterVisible, setIsFiterVisible] = useState(false);

  const { options, handleFilterSelect } = useSessionsFilter(onFilterChange);

  return (
    <div className={styles.container}>
      <div
        className={styles.title}
        onClick={() => setIsFiterVisible(!isFilterVisible)}>
        {isFilterVisible ? (
          <IconButton icon={IconBottom} type="no_bg" />
        ) : (
          <IconButton icon={IconRight} type="no_bg" />
        )}
        <div className={styles.text}>Фильтры</div>
      </div>

      <div className={styles.filter}>
        {isFilterVisible ? (
          <DefaultDropdown
            placeholder="Выберите тип сортировки"
            options={options}
            value={filter}
            onSelect={handleFilterSelect}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
