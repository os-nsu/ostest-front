import { Dialog } from 'primereact/dialog';
import styles from '@styles/components/ModalDeleteLab.module.scss';
import IconClose from '@/UI/icons/IconClose/IconClose';
import DefaultModalButtons from '@/components/modals/ModalSubmitDelete/DefaultModalButtons';
import IconButton from '@/UI/buttons/IconButton/IconButton';

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
            <IconButton
              icon={IconClose({ color: 'black' })}
              onClick={onPrevent}
              type="no_bg"
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
