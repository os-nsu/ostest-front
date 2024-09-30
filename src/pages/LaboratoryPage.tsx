import { useParams, useNavigate } from 'react-router-dom';
import { laboratories } from '../mocks/laboratories';
import { Laboratory } from '../types/laboratory';
import Header from '../components/NavigationHeader/NavigationHeader';
import Lab from '../components/Laboratory/Laboratory';
import styles from '@styles/components/LaboratoryPage.module.scss';
import ButtonBack from '@public/button_back.svg';

export default function LabPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lab = laboratories.find((lab: Laboratory) => lab.id === Number(id));

  if (!lab) {
    return <div>Лабораторная работа не найдена</div>;
  }

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Header activeTab="labs" onSelectTab={() => {}} tabs={false} />
      <main className={styles.labpage__main}>
        <button
          type="button"
          className={styles.labpage__button_back}
          onClick={handleBackClick}>
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
