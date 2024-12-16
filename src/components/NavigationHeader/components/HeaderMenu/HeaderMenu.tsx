import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@styles/components/NavigationHeader.module.scss';

interface HeaderMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  userName: string;
  isLoading: boolean;
  handleLogout: () => void;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  isMenuOpen,
  toggleMenu,
  userName,
  isLoading,
  handleLogout,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className={`${styles.name} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}>
        {isLoading ? '...' : userName}
      </button>
      {isMenuOpen && (
        <div className={styles.menu}>
          <button className={styles.menuButton}>Сменить пароль</button>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => navigate('/lab/attempts')}>
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
    </>
  );
};

export default HeaderMenu;
