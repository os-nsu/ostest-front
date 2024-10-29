import styles from '@styles/components/TestsPageStyles/AboutTest.module.scss';
import { Group } from '@/types/Group';
import AboutGroupDataBlock from './components/AboutGroupDataBlock';

interface AboutGroupProps {
  group: Group;
}

export default function AboutGroup({ group }: AboutGroupProps) {
  const { status, studentsCount, teacher } = group;

  const blocks = [
    { title: 'Статус', text: status },
    { title: 'Число участников', text: studentsCount.toString() },
    { title: 'Преподаватели', text: teacher },
    { title: 'Студенты', text: 'Здесь будут студенты' },
  ];

  return (
    <div className={styles.container}>
      {blocks.map(({ title, text }, index) => (
        <AboutGroupDataBlock title={title} text={text} key={index} />
      ))}
    </div>
  );
}
