import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import styles from '@styles/components/GroupsPageStyles/GroupsList.module.scss';
import { Group } from '@/types/Group';
import { ExtractorKey, useGroupList } from './hooks/useGroupsList';

interface GroupsListProps {
  groups: Group[];
  onSelectGroup?: (group: Group) => void;
}

export default function GroupsList({ groups, onSelectGroup }: GroupsListProps) {
  const columns: { field: ExtractorKey; header: string }[] = [
    { field: 'name', header: 'Номер' },
    { field: 'status', header: 'Статус' },
    { field: 'studentsCount', header: 'Число участников' },
    { field: 'teacher', header: 'Преподаватель' },
  ];

  const { rowExtractors } = useGroupList();

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
              const extractor = rowExtractors[field];
              return extractor ? extractor(rowData) : '';
            }}
          />
        ))}
      </DataTable>
    </>
  );
}
