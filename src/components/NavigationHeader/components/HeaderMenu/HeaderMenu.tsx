import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@styles/components/NavigationHeader.module.scss';
import { useChangePassword } from './hooks/useChangePassword';
import ModalChangePassword from '../../../modals/ModalChangePassword/ModalChangePassword';
import { useUserRole } from '@/hooks/useUserRole';
import { RoleTypes } from '@/types/Role';

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
  const { isModalVisible, setModalVisible } = useChangePassword();
  const { role } = useUserRole();
  const sessionsText =
    role === RoleTypes.STUDENT
      ? 'Мои сессии сдачи'
      : 'Информация о выполняемых работах';

  return (
    <>
      <button
        className={`${styles.name} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}>
        {isLoading ? '...' : userName}
      </button>
      {isMenuOpen && (
        <div className={styles.menu}>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setModalVisible(true)}>
            Сменить пароль
          </button>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => navigate('/lab/attempts')}>
            {sessionsText}
          </button>
          <button
            type="button"
            className={styles.menuButton}
            onClick={handleLogout}>
            Выйти
          </button>
        </div>
      )}
      <ModalChangePassword
        displayed={isModalVisible}
        onChange={() => {
          setModalVisible(false);
        }}
        onPrevent={() => setModalVisible(false)}
      />
    </>
  );
};

export default HeaderMenu;
