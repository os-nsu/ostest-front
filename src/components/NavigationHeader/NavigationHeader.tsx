import React from 'react';
import styles from '@styles/components/NavigationHeader.module.scss';
import IconLabs from '@public/labs.svg';
import IconTests from '@public/tests.svg';
import IconGroups from '@public/groups.svg';
import { useNavigationHeaderState } from './hooks/useNavigationHeaderState';
import { useAuthManagement } from './hooks/useAuthManagement';
import HeaderButton from './components/HeaderButton/HeaderButton';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';

interface NavigationHeaderProps {
  activeTab?: string;
  tabs?: boolean;
}

const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  activeTab,
  tabs,
}) => {
  const { isMenuOpen, toggleMenu, isActiveTab } =
    useNavigationHeaderState(activeTab);
  const { user, isLoading, handleLogout } = useAuthManagement();

  return (
    <div className={styles.header}>
      <div className={styles.header_navigation}>
        <div className={styles.leftGroup}>
          <p className={styles.header_logo}>NSU OS TEST</p>
          {tabs && (
            <div className={styles.header_buttons}>
              <HeaderButton
                icon={IconLabs}
                label="Лабораторные"
                isActive={isActiveTab('labs')}
                navigateTo="/"
              />
              <HeaderButton
                icon={IconTests}
                label="Тесты"
                isActive={isActiveTab('tests')}
                navigateTo="/tests"
              />
              <HeaderButton
                icon={IconGroups}
                label="Группы"
                isActive={isActiveTab('groups')}
                navigateTo="/groups"
              />
            </div>
          )}
        </div>
        <div className={styles.rightGroup}>
          <HeaderMenu
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            userName={`${user?.firstName || ''} ${user?.secondName || ''}`}
            isLoading={isLoading}
            handleLogout={handleLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
