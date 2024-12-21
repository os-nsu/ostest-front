import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@styles/components/NavigationHeader.module.scss';
import { useChangePassword } from './hooks/useChangePassword';
import ModalChangePassword from '../../../modals/ModalChangePassword/ModalChangePassword';
import { RoleTypes } from '@/types/Role';
import { useAppSelector } from '@/store/hooks';
import { selectRole } from '@/store/role/roleSelectors';

interface HeaderMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  userName: string;
  isLoading: boolean;
  handleLogout: () => void;
  menuRef?: React.RefObject<HTMLDivElement>;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  isMenuOpen,
  toggleMenu,
  userName,
  isLoading,
  handleLogout,
  menuRef,
}) => {
  const navigate = useNavigate();
  const { isModalVisible, setModalVisible } = useChangePassword();
  const role = useAppSelector(selectRole);
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
        <div className={styles.menu} ref={menuRef}>
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
