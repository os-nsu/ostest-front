import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { laboratories } from '../../mocks/laboratories';
import { LaboratoryType } from '../../types/LaboratoryType';
import LabElementWrapper from './components/LabElementWrapper/LabElementWrapper';
import styles from '@styles/components/LabList.module.scss';

export default function LabList() {
  const labs: LaboratoryType[] = laboratories;

  const formatDeadline = (deadline: string) => {
    return new Date(deadline).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className={styles.labs_table}>
      <DataTable value={labs}>
        <Column
          field="name"
          header="Название"
          body={rowData => <LabElementWrapper rowData={rowData} />}
        />
        <Column
          field="deadline"
          header="Дэдлайн"
          body={rowData => <span>{formatDeadline(rowData.deadline)}</span>}
          style={{ width: '25%' }}
        />
      </DataTable>
    </div>
  );
}
