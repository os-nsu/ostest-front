import { Button } from 'primereact/button';
import styles from '@styles/components/DefaultButton.module.scss';

interface DefaultButtonProps {
  buttonClass?: string;
  label: string;
  icon?: string;
  onClick?: () => void;
}

export default function DefaultButton({
  buttonClass,
  label,
  icon,
  onClick,
}: DefaultButtonProps) {
  return (
    <Button
      className={[styles.button, buttonClass].join(' ')}
      onClick={onClick}>
      <span>{label}</span>
      {icon && <img src={icon} alt="test-page-title-icon" />}
    </Button>
  );
}
