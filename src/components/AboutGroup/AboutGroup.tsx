import styles from '@styles/components/TestsPageStyles/AboutTest.module.scss';
import { Group } from '@/types/Group';
import AboutGroupDataBlock from './components/AboutGroupDataBlock';

interface AboutGroupProps {
  group: Group;
}

export default function AboutGroup({ group }: AboutGroupProps) {
  const { status, studentsCount } = group;

  const students = [
    { name: 'student 1' },
    { name: 'student 2' },
    { name: 'student 3' },
    { name: 'student 4' },
  ];

  const teachers = [
    { name: 'teacher 1' },
    { name: 'teacher 2' },
    { name: 'teacher 3' },
    { name: 'teacher 4' },
  ];

  const blocks = [
    { title: 'Статус', text: status },
    { title: 'Число участников', text: studentsCount.toString() },
    { title: 'Преподаватели', text: teachers },
    { title: 'Студенты', text: students },
  ];

  return (
    <div className={styles.container}>
      {blocks.map(({ title, text }, index) => (
        <AboutGroupDataBlock title={title} text={text} key={index} />
      ))}
    </div>
  );
}
