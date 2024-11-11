import styles from '@styles/components/IconButton.module.scss';
import { Button } from 'primereact/button';

interface IconButtonProps {
  icon: string;
  type?: 'default' | 'no_bg';
  onClick?: () => void;
  altText?: string;
  className?: string;
}

export default function IconButton({
  icon,
  type = 'default',
  onClick,
  altText = 'button icon',
  className = ' ',
}: IconButtonProps) {
  return (
    <Button
      className={`${styles[type]} ${styles[className]}`}
      onClick={onClick}>
      <img src={icon} alt={altText} className={styles.icon} />
    </Button>
  );
}
