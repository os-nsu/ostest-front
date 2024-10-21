import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import styles from '@styles/components/LabTable.module.scss';
import { Laboratory } from '@/types/Laboratory.ts';

interface LabListProps {
  laboratories: Laboratory[];
}

export default function LabList({ laboratories }: LabListProps) {
  const columns = [
    { field: 'name', header: 'Название' },
    { field: 'description', header: 'Описание' },
    { field: 'deadline', header: 'Срок сдачи' },
  ];

  if (!laboratories || !laboratories.length) {
    return (
      <span className={styles.labs_table_empty}>
        Создайте первую лабораторную работу
      </span>
    );
  }

  return (
    <DataTable value={laboratories} className={styles.table} rowHover>
      {columns.map(({ field, header }, index) => (
        <Column
          field={field}
          header={header}
          headerClassName={styles.header}
          bodyClassName={styles.cell}
          key={index}
        />
      ))}
    </DataTable>
  );
}
