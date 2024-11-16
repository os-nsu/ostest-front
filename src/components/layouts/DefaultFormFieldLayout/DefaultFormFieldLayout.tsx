import { ReactNode } from 'react';
import styles from '@styles/layouts/DefaultFormFieldLayout.module.scss';
import DefaultFieldLabel from '@UI/label/DefaultFieldLabel/DefaultFieldLabel.tsx';

interface DefaultFormFieldLayoutProps {
  required?: boolean;
  label?: string;
  Field: ReactNode;
}

export default function DefaultFormFieldLayout({
  label,
  required,
  Field,
}: DefaultFormFieldLayoutProps) {
  return (
    <div className={styles.container}>
      {label ? (
        <DefaultFieldLabel label={label} isRequired={required} />
      ) : undefined}
      {Field}
    </div>
  );
}
