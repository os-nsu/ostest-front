import styles from '@styles/components/IconButton.module.scss';
import { Button } from 'primereact/button';

interface IconButtonProps {
  icon: string;
  type?: 'default' | 'no_bg';
  onClick?: () => void;
  altText?: string;
}

export default function IconButton({
  icon,
  type = 'default',
  onClick,
  altText = 'button icon',
}: IconButtonProps) {
  return (
    <Button className={styles[type]} onClick={onClick}>
      <img src={icon} alt={altText} className={styles.icon} />
    </Button>
  );
}
