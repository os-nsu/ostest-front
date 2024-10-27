import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import styles from '@styles/components/GroupsPageStyles/GroupsList.module.scss';
import { Group } from '@/types/Group';

interface GroupsListProps {
  groups: Group[];
}

export default function GroupsList({ groups }: GroupsListProps) {
  const columns = [
    { field: 'name', header: 'Номер' },
    { field: 'status', header: 'Статус' },
    { field: 'studentsCount', header: 'Число участников' },
    { field: 'teacher', header: 'Преподаватель' },
  ];

  return (
    <DataTable value={groups} className={styles.table}>
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
