import styles from '@styles/components/IconButton.module.scss';
import { Button } from 'primereact/button';

interface IconButtonProps {
  icon: string;
  onClick?: () => void;
  altText?: string;
}

export default function IconButton({
  icon,
  onClick,
  altText = 'button icon',
}: IconButtonProps) {
  return (
    <Button className={styles.button} onClick={onClick}>
      <img src={icon} alt={altText} className={styles.icon} />
    </Button>
  );
}
