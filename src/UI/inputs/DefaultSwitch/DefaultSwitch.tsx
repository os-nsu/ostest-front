import { InputSwitch } from 'primereact/inputswitch';
import styles from '@styles/components/DefaultSwitch.module.scss';

interface DefaultSwitchProps {
  checked?: boolean;
  label?: string;
}

export default function DefaultSwitch({
  label,
  checked = false,
}: DefaultSwitchProps) {
  return (
    <div className={styles.container}>
      <InputSwitch checked={checked} className={styles.input} />
      {label ? <span>{label}</span> : null}
    </div>
  );
}
