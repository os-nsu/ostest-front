import styles from '@styles/components/NavigationHeader.module.scss';
import IconLabs from '@public/labs.svg';
import IconTests from '@public/tests.svg';
import IconRating from '@public/rating.svg';
import IconAvatar from '@public/avatar.svg';

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
    <div className={styles.header}>
      <div className={styles.header_navigation}>
        <p className={styles.header_logo}>NSU OS TEST</p>
        {tabs && (
          <div className={styles.header_buttons}>
            <button
              type="button"
              className={`${styles.header_button} ${activeTab === 'labs' ? styles.header_button_checked : ''}`}
              onClick={() => onSelectTab('labs')}>
              <img src={IconLabs} />
              <span>Лабораторные</span>
            </button>
            <button
              type="button"
              className={`${styles.header_button} ${activeTab === 'tests' ? styles.header_button_checked : ''}`}
              onClick={() => onSelectTab('tests')}>
              <img src={IconTests} />
              <span>Тесты</span>
            </button>
            <button
              type="button"
              className={`${styles.header_button} ${activeTab === 'rating' ? styles.header_button_checked : ''}`}
              onClick={() => onSelectTab('rating')}>
              <img src={IconRating} />
              <span>Рейтинг</span>
            </button>
          </div>
        )}
      </div>
      <img className={styles.header_avatar} src={IconAvatar} alt="Аватар" />
    </div>
  );
}

export default NavigationHeader;
