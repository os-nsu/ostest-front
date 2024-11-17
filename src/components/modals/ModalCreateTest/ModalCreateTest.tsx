import TestForm from '@/components/forms/TestForm/TestForm.tsx';
import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/TestsPageStyles/ModalCreateTest.module.scss';
import ModalCreateTestHeader from '@/components/modals/ModalCreateTest/components/ModalCreateTestHeader/ModalCreateTestHeader.tsx';

interface ModalCreateTestProps {
  displayed?: boolean;
  onClose?: () => void;
  onCreated?: () => void;
}

export default function ModalCreateTest({
  displayed,
  onClose,
  onCreated,
}: ModalCreateTestProps) {
  return (
    <Dialog
      style={{ border: 'none' }}
      visible={displayed}
      onHide={() => {}}
      content={() => (
        <div className={styles.container}>
          <ModalCreateTestHeader title="Добавить тест" onClose={onClose} />
          <TestForm onResponded={onCreated} />
        </div>
      )}
    />
  );
}
