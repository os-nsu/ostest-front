import ModalCreateLab from '@/components/modals/ModalCreateLab/ModalCreateLab';
import PlusIcon from '@public/plus.svg';
import styles from '@styles/components/LabPageTitle.module.scss';
import DefaultButton from '@UI/buttons/DefaultButton/DefaultButton.tsx';
import { useState } from 'react';

export default function LabPageTitle({ onUpdate }: { onUpdate: () => void }) {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Лабораторные работы</h1>
      <DefaultButton
        label="Создать"
        icon={PlusIcon}
        onClick={() => setModalVisible(true)}
      />
      <ModalCreateLab
        displayed={isModalVisible}
        onPrevent={() => setModalVisible(false)}
        onUpdate={() => {
          setModalVisible(false);
          onUpdate();
        }}
      />
    </div>
  );
}
