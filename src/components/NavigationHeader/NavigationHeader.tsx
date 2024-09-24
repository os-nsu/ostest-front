import styles from '@styles/components/NavigationHeader.module.scss';

interface NavigationHeaderProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

function NavigationHeader({ activeTab, onSelectTab }: NavigationHeaderProps) {
  return (
    <header className={styles.main__header}>
      <img
        className={styles.main__header_logo}
        src="@public/logo.svg"
        alt="Логотип ostest"
      />
      <div className={styles.main__header_buttons}>
        <button
          type="button"
          className={`${styles.main__header_button} ${activeTab === 'labs' ? styles.main__header_button_checked : ''}`}
          onClick={() => onSelectTab('labs')}>
          Лабораторные
        </button>
        <button
          type="button"
          className={`${styles.main__header_button} ${activeTab === 'rating' ? styles.main__header_button_checked : ''}`}
          onClick={() => onSelectTab('rating')}>
          Рейтинг
        </button>
      </div>
      <img className={styles.main__header_avatar} src="@public/avatar.png" />
    </header>
  );
}

export default NavigationHeader;
