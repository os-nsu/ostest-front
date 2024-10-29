import styles from '@styles/components/NavigationHeader.module.scss';
import IconLabs from '@public/labs.svg';
import IconTests from '@public/tests.svg';
import IconGroups from '@public/groups.svg';
import IconAvatar from '@public/avatar.svg';
import { useNavigate } from 'react-router-dom';

interface NavigationHeaderProps {
  activeTab: string;
  tabs?: boolean;
}

function NavigationHeader({ activeTab, tabs }: NavigationHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.header_navigation}>
        <p className={styles.header_logo}>NSU OS TEST</p>
        {tabs && (
          <div className={styles.header_buttons}>
            <button
              type="button"
              className={`${styles.header_button} ${activeTab === 'labs' ? styles.header_button_checked : ''}`}
              onClick={() => navigate('/')}>
              <img src={IconLabs} />
              <span>Лабораторные</span>
            </button>
            <button
              type="button"
              className={`${styles.header_button} ${activeTab === 'tests' ? styles.header_button_checked : ''}`}
              onClick={() => navigate('/tests')}>
              <img src={IconTests} />
              <span>Тесты</span>
            </button>
            <button
              type="button"
              className={`${styles.header_button} ${activeTab === 'groups' ? styles.header_button_checked : ''}`}
              onClick={() => navigate('/groups')}>
              <img src={IconGroups} />
              <span>Группы</span>
            </button>
          </div>
        )}
      </div>
      <img className={styles.header_avatar} src={IconAvatar} alt="Аватар" />
    </div>
  );
}

export default NavigationHeader;
