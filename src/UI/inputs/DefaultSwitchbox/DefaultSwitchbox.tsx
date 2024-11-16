import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { useState } from 'react';
import styles from '@styles/components/DefaultSwitchbox.module.scss';

interface DefaultSwitchboxClassProps {
  className?: string;
}

interface DefaultSwitchboxProps extends DefaultSwitchboxClassProps {
  label?: string;
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
}

export default function DefaultSwitchbox({
  className,
  label,
  checked = false,
  onCheck,
}: DefaultSwitchboxProps) {
  const [isChecked, setChecked] = useState(checked);

  const onChange = (e: InputSwitchChangeEvent) => {
    setChecked(e.value);
    if (!onCheck) {
      return;
    }
    onCheck(e.value);
  };

  return (
    <div className={styles.container}>
      <InputSwitch
        className={[
          styles.switch,
          isChecked ? styles.checked : '',
          className || '',
        ]
          .join(' ')
          .trim()}
        checked={isChecked}
        onChange={onChange}
      />
      {label ? <span className={styles.label}>{label}</span> : undefined}
    </div>
  );
}
