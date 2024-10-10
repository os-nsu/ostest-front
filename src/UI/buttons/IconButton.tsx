import '@styles/components/IconButton.scss';
import { Button } from 'primereact/button';

interface IconButtonProps {
  icon: string;
  onClick: () => void;
  altText?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  altText = 'button icon',
}) => {
  return (
    <Button className="button" onClick={onClick}>
      <img src={icon} alt={altText} className="icon" />
    </Button>
  );
};

export default IconButton;
