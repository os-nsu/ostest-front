import styles from '@styles/components/DefaultFieldLabel.module.scss';

interface DefaultFieldLabelProps {
  label: string;
  isRequired?: boolean;
}

export default function DefaultFieldLabel({
  label,
  isRequired,
}: DefaultFieldLabelProps) {
  return (
    <label className={styles.label}>
      {label}
      {isRequired ? <span className={styles.mark}> * </span> : null}
    </label>
  );
}
