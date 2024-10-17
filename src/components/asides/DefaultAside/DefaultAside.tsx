import { ReactNode } from 'react';
import { Sidebar } from 'primereact/sidebar';

interface DefaultAsideProps {
  visible?: boolean;
  children?: ReactNode;
  onHide?: () => void;
}

export default function DefaultAside({
  children,
  visible,
  onHide,
}: DefaultAsideProps) {
  return (
    <Sidebar
      visible={visible}
      position="right"
      onHide={() => onHide && onHide()}>
      {children}
    </Sidebar>
  );
}
