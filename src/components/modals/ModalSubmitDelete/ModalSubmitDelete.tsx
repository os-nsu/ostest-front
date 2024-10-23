import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalDeleteLab.module.scss';
import { Button } from 'primereact/button';
import IconClose from '@public/close.svg';
import DefaultModalButtons from '@/components/modals/ModalSubmitDelete/DefaultModalButtons';

interface ModalSubmitDeleteProps {
  displayed?: boolean;
  name?: string;
  id?: string;
  onPrevent: () => void;
  onSubmit: () => void;
}

export default function ModalSubmitDelete({
  displayed,
  name,
  onPrevent,
  onSubmit,
}: ModalSubmitDeleteProps) {
  return (
    <Dialog
      visible={displayed}
      onHide={() => {}}
      className={styles.wrapper}
      content={() => (
        <div className={styles.container}>
          <div className={styles.buttonContainer}>
            <Button
              className={styles.close}
              icon={<img src={IconClose} alt="" />}
              rounded
              onClick={onPrevent}
            />
          </div>
          <span className={styles.title}>
            Вы уверены, что хотите удалить {name}?
          </span>
          <DefaultModalButtons onPrevent={onPrevent} onSubmit={onSubmit} />
        </div>
      )}
    />
  );
}
