import { useParams } from 'react-router-dom';
import LaboratoryPageContent from '@/components/LaboratoryPageComponents/LaboratoryPageContent/LaboratoryPageContent.tsx';
import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout.tsx';
import { useLaboratoryPage } from './hooks/useLaboratoryPage';

export default function LaboratoryPage() {
  const { id } = useParams<{ id: string }>();

  const { laboratory, isLoading, isError } = useLaboratoryPage(id);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>{isError}</div>;
  }

  if (!laboratory) {
    return <div>Лабораторная работа не найдена</div>;
  }

  return (
    <DefaultPageLayout activeTab={'lab'} onSelectTab={() => {}}>
      <LaboratoryPageContent laboratory={laboratory} tests={laboratory.tests} />
    </DefaultPageLayout>
  );
}
