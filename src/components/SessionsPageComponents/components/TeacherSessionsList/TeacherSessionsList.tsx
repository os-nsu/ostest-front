import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import {
  ExtractorKey,
  useTeacherSessionsList,
} from './hooks/useTeacherSessionsList';
import { useNavigate } from 'react-router-dom';
import { SessionsContent } from '@/DTO/SessionDTO';
import styles from '@styles/components/SessionsPageStyles/StudentSessionsList.module.scss';
import WorkStatus from '@/components/SessionPageCpmponents/components/WorkStatus/WorkStatus';
import { useStudentSessionsList } from '../StudentSessionsList/hooks/useStudentSessionsList';

interface TeacherSessionsListProps {
  attempts: Omit<SessionsContent, 'user'>[];
}

export default function TeacherSessionsList({
  attempts,
}: TeacherSessionsListProps) {
  const columns: { field: ExtractorKey; header: string }[] = [
    { field: 'laboratoryName', header: 'Название лабораторной работы' },
    { field: 'attemptsCount', header: 'Количество попыток' },
    { field: 'student', header: 'Студент' },
    { field: 'group', header: 'Группа' },
    { field: 'status', header: 'Статус выполнения' },
  ];

  const { rowExtractors } = useTeacherSessionsList();
  const { adaptSessionStatusToProcessStatus } = useStudentSessionsList();
  const navigate = useNavigate();

  return (
    <>
      <DataTable
        value={attempts}
        className={styles.table}
        onRowClick={({ data }) => navigate(`/lab/attempts/${data.id}`)}
        rowHover>
        {columns.map(({ field, header }, index) => (
          <Column
            field={field}
            header={header}
            headerClassName={styles.header}
            bodyClassName={styles.cell}
            key={index}
            body={(rowData: Omit<SessionsContent, 'user'>) => {
              if (field === 'status') {
                const { processStatus, label } =
                  adaptSessionStatusToProcessStatus(rowData.status);
                return <WorkStatus status={processStatus} text={label} />;
              }

              const extractor = rowExtractors[field];
              return extractor ? extractor(rowData) : '';
            }}
          />
        ))}
      </DataTable>
    </>
  );
}
