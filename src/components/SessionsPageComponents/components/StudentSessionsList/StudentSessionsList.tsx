import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import {
  ExtractorKey,
  useStudentSessionsList,
} from './hooks/useStudentSessionsList';
import { SessionsContent } from '@/DTO/SessionDTO';
import styles from '@styles/components/SessionsPageStyles/StudentSessionsList.module.scss';
import { useNavigate } from 'react-router-dom';
import WorkStatus from '@/components/SessionPageCpmponents/components/WorkStatus/WorkStatus';

interface StudentSessionsListProps {
  attempts: Omit<SessionsContent, 'user'>[];
}

export default function StudentSessionsList({
  attempts,
}: StudentSessionsListProps) {
  const columns: { field: ExtractorKey; header: string }[] = [
    { field: 'laboratoryName', header: 'Название лабораторной работы' },
    { field: 'attemptsCount', header: 'Количество попыток' },
    { field: 'status', header: 'Статус выполнения' },
  ];

  const { rowExtractors, adaptSessionStatusToProcessStatus } =
    useStudentSessionsList();
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
