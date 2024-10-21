import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import styles from '@styles/components/LabTable.module.scss';
import { Laboratory } from '@/types/Laboratory.ts';

interface LabListProps {
  laboratories: Laboratory[];
}

export default function LabList({ laboratories }: LabListProps) {
  if (!laboratories || !laboratories.length) {
    return (
      <span className={styles.labs_table_empty}>
        Создайте первую лабораторную работу
      </span>
    );
  }

  return (
    <DataTable value={laboratories}>
      <Column field="name" header="Название" />
      <Column field="description" header="Описание" />
      <Column field="deadline" header="Срок сдачи" />
    </DataTable>
  );
}
