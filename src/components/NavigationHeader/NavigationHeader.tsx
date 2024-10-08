import styles from '@styles/components/NavigationHeader.module.scss';
import IconLogo from '@public/logo.svg';
import avatar from '@public/avatar.png';

interface NavigationHeaderProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  tabs?: boolean;
}

function NavigationHeader({
  activeTab,
  onSelectTab,
  tabs,
}: NavigationHeaderProps) {
  return (
    <header className={styles.main__header}>
      <img
        className={styles.main__header_logo}
        src={IconLogo}
        alt="Логотип ostest"
      />
      {tabs && (
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
      )}
      <img className={styles.main__header_avatar} src={avatar} />
    </header>
  );
}

export default NavigationHeader;
