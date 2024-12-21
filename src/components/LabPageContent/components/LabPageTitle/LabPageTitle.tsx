import ModalCreateLab from '@/components/modals/ModalCreateLab/ModalCreateLab';
import { useAppSelector } from '@/store/hooks';
import { selectRole } from '@/store/role/roleSelectors';
import { RoleTypes } from '@/types/Role';
import PlusIcon from '@public/plus.svg';
import styles from '@styles/components/LabPageTitle.module.scss';
import DefaultButton from '@UI/buttons/DefaultButton/DefaultButton.tsx';
import { useState } from 'react';

export default function LabPageTitle({ onUpdate }: { onUpdate: () => void }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const role = useAppSelector(selectRole);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Лабораторные работы</h1>
      {role === RoleTypes.ADMIN ? (
        <DefaultButton
          label="Создать"
          icon={PlusIcon}
          onClick={() => setModalVisible(true)}
        />
      ) : undefined}
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
