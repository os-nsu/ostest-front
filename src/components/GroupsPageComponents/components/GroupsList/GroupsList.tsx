import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import styles from '@styles/components/GroupsPageStyles/GroupsList.module.scss';
import { Group } from '@/types/Group';
import { useGroupList } from './hooks/useGroupsList';

interface GroupsListProps {
  groups: Group[];
  onSelectGroup?: (group: Group) => void;
}

export default function GroupsList({ groups, onSelectGroup }: GroupsListProps) {
  const columns = [
    { field: 'name', header: 'Номер' },
    { field: 'status', header: 'Статус' },
    { field: 'studentsCount', header: 'Число участников' },
    { field: 'teacher', header: 'Преподаватель' },
  ];

  const { getStudentsCount, getTeacherName } = useGroupList();

  return (
    <>
      <DataTable
        value={groups}
        className={styles.table}
        onRowClick={({ index }) =>
          onSelectGroup && onSelectGroup(groups[index])
        }
        rowHover>
        {columns.map(({ field, header }, index) => (
          <Column
            field={field}
            header={header}
            headerClassName={styles.header}
            bodyClassName={styles.cell}
            key={index}
            body={(rowData: Group) => {
              switch (field) {
                case 'studentsCount':
                  return getStudentsCount(rowData);
                case 'teacher':
                  return getTeacherName(rowData);
                case 'name':
                  return rowData.name;
                case 'status':
                  return rowData.status;
              }
            }}
          />
        ))}
      </DataTable>
    </>
  );
}
