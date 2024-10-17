import styles from '@styles/components/LaboratoryPageTitle.module.scss';
import IconButton from '@/UI/buttons/IconButton/IconButton.tsx';
import IconPebcil from '@public/pencil_line.svg';
import IconTrash from '@public/trash.svg';
import IconLeft from '@public/chevron-left.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ModalDeleteLab from '@/components/modals/ModalDeleteLab/ModalDeleteLab';

interface LaboratoryPageTitleProps {
  name: string;
  id?: string;
}

export default function LaboratoryPageTitle({
  name,
  id,
}: LaboratoryPageTitleProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

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
        <IconButton icon={IconPebcil} />
        <IconButton icon={IconTrash} onClick={handleOpenModal} />
        <ModalDeleteLab
          displayed={isModalVisible}
          labName={name}
          id={id}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
}
