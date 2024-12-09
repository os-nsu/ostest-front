import styles from '@styles/components/NavigationHeader.module.scss';
import IconLabs from '@public/labs.svg';
import IconTests from '@public/tests.svg';
import IconGroups from '@public/groups.svg';
import { useNavigationHeaderState } from './hooks/useNavigationHeaderState';
import { useAuthManagement } from './hooks/useAuthManagement';

interface NavigationHeaderProps {
  activeTab?: string;
  tabs?: boolean;
}

function NavigationHeader({ activeTab, tabs }: NavigationHeaderProps) {
  const { isMenuOpen, toggleMenu, navigateTo, isActiveTab } =
    useNavigationHeaderState(activeTab);
  const { user, isLoading, handleLogout } = useAuthManagement();

  return (
    <div className={styles.header}>
      <div className={styles.header_navigation}>
        <div className={styles.leftGroup}>
          <p className={styles.header_logo}>NSU OS TEST</p>
          {tabs && (
            <div className={styles.header_buttons}>
              <button
                type="button"
                className={`${styles.header_button} ${
                  isActiveTab('labs') ? styles.header_button_checked : ''
                }`}
                onClick={() => navigateTo('/')}>
                <img src={IconLabs} />
                <span>Лабораторные</span>
              </button>
              <button
                type="button"
                className={`${styles.header_button} ${
                  isActiveTab('tests') ? styles.header_button_checked : ''
                }`}
                onClick={() => navigateTo('/tests')}>
                <img src={IconTests} />
                <span>Тесты</span>
              </button>
              <button
                type="button"
                className={`${styles.header_button} ${
                  isActiveTab('groups') ? styles.header_button_checked : ''
                }`}
                onClick={() => navigateTo('/groups')}>
                <img src={IconGroups} />
                <span>Группы</span>
              </button>
            </div>
          )}
        </div>
        <div className={styles.rightGroup}>
          <button
            className={`${styles.name} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}>
            {isLoading ? '...' : `${user?.firstName} ${user?.secondName}`}
          </button>
          {isMenuOpen && (
            <div className={styles.menu}>
              <button className={styles.menuButton}>Сменить пароль</button>
              <button
                type="button"
                className={styles.menuButton}
                onClick={() => navigateTo('/lab/attempts')}>
                Мои сессии сдачи
              </button>
              <button
                type="button"
                className={styles.menuButton}
                onClick={handleLogout}>
                Выйти
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavigationHeader;
