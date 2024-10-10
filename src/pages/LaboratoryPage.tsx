import { useParams } from 'react-router-dom';
import { laboratories } from '../mocks/laboratories';
import { Laboratory } from '../types/Laboratory.ts';
import LaboratoryPageContent from '@/components/LaboratoryPageComponents/LaboratoryPageContent/LaboratoryPageContent.tsx';
import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout.tsx';
import { useState } from 'react';

export default function LaboratoryPage() {
  const [activeTab, setActiveTab] = useState('lab');

  const { id } = useParams<{ id: string }>();
  const lab = laboratories.find((lab: Laboratory) => lab.id === Number(id));

  if (!lab) {
    return <div>Лабораторная работа не найдена</div>;
  }

  const tests: string[] = [];

  return (
    <DefaultPageLayout activeTab={activeTab} onSelectTab={setActiveTab}>
      <LaboratoryPageContent laboratory={lab} tests={tests} />
    </DefaultPageLayout>
  );
}
