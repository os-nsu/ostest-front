import { Test } from '@/types/Test.ts';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface TestsListProps {
  tests: Test[];
}

export default function TestsList({ tests }: TestsListProps) {
  return (
    <div>
      <DataTable value={tests}>
        <Column field="name" header="Название" />
        <Column field="description" header="Описание" />
        {/*<Column field="isActive" header="Статус" />*/}
      </DataTable>
    </div>
  );
}
