import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { laboratories } from '../../../../mocks/laboratories';
import LabElementWrapper from './components/LabElementWrapper/LabElementWrapper';
import styles from '@styles/components/LabTable.module.scss';

export default function LabList() {
  const formatDescription = (description: string) => {
    if (description.length > 0) return description.substring(0, 80) + '...';
    return description;
  };

  const formatDeadline = (deadline: string) => {
    return new Date(deadline).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  if (!laboratories || !laboratories.length) {
    return (
      <span className={styles.labs_table_empty}>
        Создайте первую лабораторную работу
      </span>
    );
  } else {
    return (
      <DataTable value={laboratories} className={styles.labs_table}>
        <Column
          field="name"
          header="Название"
          body={rowData => <LabElementWrapper rowData={rowData} />}
        />
        <Column
          field="description"
          header="Описание"
          body={rowData => (
            <span>{formatDescription(rowData.description)}</span>
          )}
        />
        <Column
          field="deadline"
          header="Срок сдачи"
          body={rowData => <span>{formatDeadline(rowData.deadline)}</span>}
        />
      </DataTable>
    );
  }
}
