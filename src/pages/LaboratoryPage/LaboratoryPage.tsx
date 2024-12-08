import { useParams } from 'react-router-dom';
import LaboratoryPageContent from '@/components/LaboratoryPageComponents/LaboratoryPageContent/LaboratoryPageContent.tsx';
import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout.tsx';

export default function LaboratoryPage() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Лабораторная работа не найдена</div>;
  }

  return (
    <DefaultPageLayout activeTab={'lab'}>
      <LaboratoryPageContent id={id} />
    </DefaultPageLayout>
  );
}
