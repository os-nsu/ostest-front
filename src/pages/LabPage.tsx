import { useParams } from 'react-router-dom';
import { laboratories } from '../mocks/laboratories';
import { Laboratory } from '../types/laboratory';

export default function LabPage() {
  const { id } = useParams<{ id: string }>();
  const lab = laboratories.find((lab: Laboratory) => lab.id === Number(id));

  if (!lab) {
    return <div>Лабораторная работа не найдена</div>;
  }

  return (
    <div>
      <h1>{lab.name}</h1>
      <p>Дэдлайн: {new Date(lab.deadline).toLocaleDateString('ru-RU')}</p>
      <p>Описание: {lab.description}</p>
    </div>
  );
}
