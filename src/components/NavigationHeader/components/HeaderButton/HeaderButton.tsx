import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@styles/components/NavigationHeader.module.scss';

interface HeaderButtonProps {
  icon: string;
  label: string;
  isActive: boolean;
  navigateTo: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
  icon,
  label,
  isActive,
  navigateTo,
}) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={`${styles.header_button} ${isActive ? styles.header_button_checked : ''}`}
      onClick={() => navigate(navigateTo)}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </button>
  );
};

export default HeaderButton;
