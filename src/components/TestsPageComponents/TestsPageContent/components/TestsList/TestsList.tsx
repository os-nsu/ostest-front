import { Test } from '@/types/Test.ts';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import styles from '@styles/components/TestsPageStyles/TestsList.module.scss';
import TestStatus from '@/components/TestsPageComponents/TestsPageContent/components/TestsList/components/TestStatus/TestStatus.tsx';

interface TestsListProps {
  tests: Test[];
}

export default function TestsList({ tests }: TestsListProps) {
  const columns = [
    { field: 'name', header: 'Название' },
    { field: 'description', header: 'Описание' },
  ];

  return (
    <DataTable value={tests} className={styles.table} rowHover>
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
        body={({ isActive }) => <TestStatus isActive={isActive} />}
      />
    </DataTable>
  );
}
