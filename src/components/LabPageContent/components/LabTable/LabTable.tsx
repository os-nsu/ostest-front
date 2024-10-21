import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import styles from '@styles/components/LabTable.module.scss';
import { MinimizedLaboratory } from '@/types/Laboratory.ts';
import { useNavigate } from 'react-router-dom';
import { useLabList } from '@/components/LabPageContent/components/LabTable/hooks/useLabList.ts';

interface LabListProps {
  laboratories: MinimizedLaboratory[];
}

export default function LabList({ laboratories }: LabListProps) {
  const navigate = useNavigate();
  const { columns, getTableValues } = useLabList();

  if (!laboratories || !laboratories.length) {
    return (
      <span className={styles.labs_table_empty}>
        Создайте первую лабораторную работу
      </span>
    );
  }

  return (
    <DataTable
      value={getTableValues(laboratories)}
      className={styles.table}
      onRowClick={({ data }) => navigate(`/lab/${data.id}`)}
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
    </DataTable>
  );
}
