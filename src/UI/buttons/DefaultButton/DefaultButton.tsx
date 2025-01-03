import { Button } from 'primereact/button';
import styles from '@styles/components/DefaultButton.module.scss';

interface DefaultButtonProps {
  buttonClass?: string;
  labelClass?: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function DefaultButton({
  buttonClass,
  labelClass,
  label,
  icon,
  disabled,
  onClick,
}: DefaultButtonProps) {
  return (
    <Button
      className={[styles.button, buttonClass].join(' ')}
      disabled={disabled}
      onClick={onClick}>
      <span className={labelClass}>{label}</span>
      {icon && <img src={icon} alt="test-page-title-icon" />}
    </Button>
  );
}
