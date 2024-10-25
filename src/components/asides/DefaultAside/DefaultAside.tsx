import { CSSProperties, ReactNode } from 'react';
import { Sidebar } from 'primereact/sidebar';

interface DefaultAsideProps {
  visible?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
  onHide?: () => void;
}

export default function DefaultAside({
  children,
  visible,
  style,
  onHide,
}: DefaultAsideProps) {
  return (
    <Sidebar
      visible={visible}
      position="right"
      style={style}
      content={children}
      onHide={() => onHide && onHide()}
    />
  );
}
