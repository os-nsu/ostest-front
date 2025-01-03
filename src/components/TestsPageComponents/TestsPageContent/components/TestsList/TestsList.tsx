import { MinimizedTest } from '@/types/Test.ts';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import styles from '@styles/components/TestsPageStyles/TestsList.module.scss';
import WorkStatus from '@/components/SessionPageCpmponents/components/WorkStatus/WorkStatus.tsx';
import { ProcessStatus } from '@/types/ProcessStatus.ts';

interface TestsListProps {
  tests: MinimizedTest[];
  onSelectTest?: (id?: number) => void;
}

export default function TestsList({ tests, onSelectTest }: TestsListProps) {
  const columns = [
    { field: 'name', header: 'Название' },
    { field: 'description', header: 'Описание' },
  ];

  return (
    <DataTable
      value={tests}
      className={styles.table}
      onRowClick={({ index }) => onSelectTest && onSelectTest(tests[index]?.id)}
      rowHover>
      {columns.map(({ field, header }, index) => (
        <Column
          field={field}
          header={header}
          headerClassName={styles.header}
          bodyClassName={styles.cell}
          key={index}
        />
      ))}
      <Column
        field="isActive"
        header="Статус"
        headerClassName={styles.header}
        bodyClassName={styles.cell}
        body={() => (
          <WorkStatus status={ProcessStatus.SUCCESS} text="Активен" />
        )}
      />
    </DataTable>
  );
}
