import styles from '@styles/components/TestsPageStyles/AboutTest.module.scss';
import { Group } from '@/types/Group';
import AboutGroupDataBlock from './components/AboutGroupDataBlock';
import { useAboutGroup } from './hooks/useAboutGroup';

interface AboutGroupProps {
  group: Group;
}

export default function AboutGroup({ group }: AboutGroupProps) {
  const { studentNames, teacherNames, studentsCount } = useAboutGroup(group);

  const blocks = [
    { title: 'Статус', text: group.status },
    { title: 'Число участников', text: studentsCount },
    { title: 'Преподаватели', text: teacherNames },
    { title: 'Студенты', text: studentNames },
  ];

  return (
    <div className={styles.container}>
      {blocks.map(({ title, text }, index) => (
        <AboutGroupDataBlock title={title} text={text} key={index} />
      ))}
    </div>
  );
}
