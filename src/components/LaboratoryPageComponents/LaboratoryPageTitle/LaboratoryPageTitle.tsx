import styles from '@styles/components/LaboratoryPageTitle.module.scss';
import IconButton from '@/UI/buttons/IconButton/IconButton.tsx';
import IconPebcil from '@public/pencil_line.svg';
import IconTrash from '@public/trash.svg';
import IconLeft from '@public/chevron-left.svg';
import { useNavigate } from 'react-router-dom';
import ModalEditLab from '@/components/modals/ModalEditLab/ModalEditLab';
import { useState } from 'react';

interface LaboratoryPageTitleProps {
  name: string;
}

export default function LaboratoryPageTitle({
  name,
}: LaboratoryPageTitleProps) {
  const navigate = useNavigate();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.nameContainer}>
        <IconButton icon={IconLeft} onClick={() => navigate(-1)} />
        <div>{name}</div>
      </div>
      <div className={styles.buttons}>
        <IconButton icon={IconPebcil} onClick={handleOpenModal} />
        <IconButton icon={IconTrash} />
        <ModalEditLab displayed={isModalVisible} onClose={handleCloseModal} />
      </div>
    </div>
  );
}
