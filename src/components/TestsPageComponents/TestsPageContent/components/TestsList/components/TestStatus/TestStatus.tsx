import styles from '@styles/components/TestsPageStyles/TestStatus.module.scss';

interface TestStatusProps {
  isActive?: boolean;
}

export default function TestStatus({ isActive }: TestStatusProps) {
  return (
    <div
      className={
        isActive
          ? styles.container
          : [styles.container, styles.errorContainer].join(' ')
      }>
      <span>{isActive ? 'Активен' : 'Отключен'}</span>
    </div>
  );
}
