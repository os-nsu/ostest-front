import { Button } from 'primereact/button';
import PlusIcon from '@public/plus.svg';
import styles from '@styles/components/LabPageTitle.module.scss';
// import { useLaboratoryProvider } from '@/providers/LaboratoryProvider/useLaboratoryProvider';
import { useTestProvider } from '@/providers/TestProvider/useTestProvider';

export default function LabPageTitle() {
  const pr = useTestProvider();
  // const pr = useLaboratoryProvider();
  return (
    <div className={styles.title_container}>
      <h1 className={styles.title}>Лабораторные работы</h1>
      <Button
        className={styles.button}
        onClick={() => {
          pr.createTest({
            data: {
              name: 'string',
              description: 'string',
              category: 'DEFAULT',
            },
            file: 'string',
          });
        }}>
        {/* onClick={() => {
          pr.addLaboratory({
            name: 'Labbaaa',
            description: 'Laba',
            semesterNumber: 1,
            deadline: '2024-12-01T23:59:00Z',
            isHidden: false,
          });
        }}> */}
        <span>Создать</span>
        <img src={PlusIcon} />
      </Button>
    </div>
  );
}
