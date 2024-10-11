import { useParams } from 'react-router-dom';
import { laboratories } from '../mocks/laboratories';
import { Laboratory } from '../types/Laboratory.ts';
import LaboratoryPageContent from '@/components/LaboratoryPageComponents/LaboratoryPageContent/LaboratoryPageContent.tsx';
import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout.tsx';
import { useEffect, useState } from 'react';
import { LaboratoryResponseData } from '@/DTO/LaboratoryDTO.ts';
import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider.ts';

export default function LaboratoryPage() {
  const [activeTab, setActiveTab] = useState('lab');
  const [laboratory, setLaboratory] = useState<LaboratoryResponseData | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [userError, setUserError] = useState<string | null>(null);

  const laboratoryProvider = useLaboratoryProvider();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) {
      setUserError('Id лабораторной не найден');
      return;
    }

    setLoading(true);
    laboratoryProvider
      .getLaboratory(id)
      .then(response => {
        if (response.status === 200) {
          setLaboratory(response.data);
        }
      })
      .catch(error => {
        const { response } = error;
        if (response?.status === 404) {
          setUserError(response.data.message);
        } else {
          console.error('Ошибка загрузки:', error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (userError) {
    return <div>{userError}</div>;
  }

  if (!laboratory) {
    return <div>Лабораторная работа не найдена</div>;
  }

  const tests: string[] = [];

  return (
    <DefaultPageLayout activeTab={activeTab} onSelectTab={setActiveTab}>
      <LaboratoryPageContent laboratory={laboratory} tests={tests} />
    </DefaultPageLayout>
  );
}
