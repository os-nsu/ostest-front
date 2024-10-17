import { Test } from '@/types/Test.ts';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import styles from '@styles/components/TestsPageStyles/TestsList.module.scss';

interface TestsListProps {
  tests: Test[];
}

export default function TestsList({ tests }: TestsListProps) {
  const columns = [
    { field: 'name', header: 'Название' },
    { field: 'description', header: 'Описание' },
    { field: 'isActive', header: 'Статус' },
  ];

  return (
    <DataTable value={tests} className={styles.table} rowHover>
      {columns.map(({ field, header }) => (
        <Column
          field={field}
          header={header}
          headerClassName={styles.header}
          bodyClassName={styles.cell}
        />
      ))}
    </DataTable>
  );
}
