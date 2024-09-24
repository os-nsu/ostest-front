import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getLabs } from './getLabs';
import { Laboratory } from './types';

export default function Labs() {
  const labs: Laboratory[] = getLabs();

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

  return (
    <div className="labs-table">
      <DataTable value={labs}>
        <Column field="name" header="Название" />
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
