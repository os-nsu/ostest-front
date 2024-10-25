import styles from '@styles/components/DefaultFileUploader.module.scss';
import DefaultFieldLabel from '@UI/label/DefaultFieldLabel/DefaultFieldLabel.tsx';
import IconPlus from '@public/plus.svg';
import DefaultButton from '@UI/buttons/DefaultButton/DefaultButton.tsx';

interface DefaultFileUploaderProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  placeholder?: string;
  required?: boolean;

  onSelect?: (files: File[]) => void;
}

export default function DefaultFileUploader({
  label,
  accept,
  multiple,
  placeholder,
  required,
  onSelect,
}: DefaultFileUploaderProps) {
  return (
    <div className={styles.container}>
      {label ? <DefaultFieldLabel label={label} isRequired={required} /> : null}
      <DefaultButton
        buttonClass={styles.button}
        label={placeholder || 'Загрузить'}
        icon={IconPlus}
      />
      <input
        type="file"
        className={styles.input}
        multiple={multiple}
        accept={accept}
      />
    </div>
  );
}
