import { useParams, useNavigate } from 'react-router-dom';
import { laboratories } from '../mocks/laboratories';
import { Laboratory } from '../types/Laboratory.ts';
import Header from '../components/NavigationHeader/NavigationHeader';
import Lab from '@/components/LaboratoryPageComponents/LaboratoryPageContent/LaboratoryPageContent.tsx';
import styles from '@styles/components/LaboratoryPage.module.scss';
import ButtonBack from '@public/button_back.svg';

export default function LaboratoryPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lab = laboratories.find((lab: Laboratory) => lab.id === Number(id));

  if (!lab) {
    return <div>Лабораторная работа не найдена</div>;
  }

  return (
    <div>
      <Header activeTab="labs" onSelectTab={() => {}} tabs={false} />
      <main className={styles.labpage__main}>
        <button
          type="button"
          className={styles.labpage__button_back}
          onClick={() => navigate('/')}>
          <img
            src={ButtonBack}
            alt="Кнопка назад"
            className={styles.labpage__button_back_img}
          />
        </button>
        <Lab laboratory={lab} />
        <button className={styles.labpage__button_add}>Добавить ответ</button>
      </main>
    </div>
  );
}
