import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { laboratories } from '../../mocks/laboratories';
import { Laboratory } from '../../types/laboratory';
import { useNavigate } from 'react-router-dom';
import styles from '@styles/components/LabList.module.scss';

export default function Labs() {
  const labs: Laboratory[] = laboratories;
  const navigate = useNavigate();

  const deadlineTemplate = (rowData: Laboratory) => {
    const formattedDate = new Date(rowData.deadline).toLocaleDateString(
      'ru-RU',
      {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      },
    );
    return <span>{formattedDate}</span>;
  };

  const nameTemplate = (rowData: Laboratory) => {
    return (
      <a onClick={() => navigate(`/lab/${rowData.id}`)} className={styles.link}>
        {rowData.name}
      </a>
    );
  };

  return (
    <div className={styles.labs_table}>
      <DataTable value={labs}>
        <Column field="name" header="Название" body={nameTemplate} />
        <Column
          field="deadline"
          header="Дэдлайн"
          body={deadlineTemplate}
          style={{ width: '25%' }}
        />
      </DataTable>
    </div>
  );
}
