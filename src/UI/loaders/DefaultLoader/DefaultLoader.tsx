import { ProgressSpinner } from 'primereact/progressspinner';

interface DefaultLoaderProps {
  width?: string;
  height?: string;
  strokeWidth?: string;
  duration?: string;
}

export default function DefaultLoader({
  width = '100px',
  height = '100px',
  strokeWidth = '4',
  duration = '5s',
}: DefaultLoaderProps) {
  return (
    <ProgressSpinner
      style={{ width, height }}
      strokeWidth={strokeWidth}
      animationDuration={duration}
    />
  );
}
