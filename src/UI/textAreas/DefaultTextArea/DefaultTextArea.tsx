import { InputTextarea } from 'primereact/inputtextarea';
import { useDefaultTextArea } from '@UI/textAreas/DefaultTextArea/hooks/useDefaultTextArea.ts';
import '@styles/components/DefaultTextArea.scss';

interface DefaultTextAreaProps {
  value?: string;
  placeholder?: string;
  label?: string;
  autoresize?: boolean;

  onChange?: (value: string) => void;
}

export default function DefaultTextArea({
  value,
  label,
  placeholder,
  autoresize,
  onChange,
}: DefaultTextAreaProps) {
  const { fieldValue, onInput } = useDefaultTextArea(value, onChange);

  return (
    <div className="container">
      {label ? <label>{label}</label> : null}
      <InputTextarea
        value={fieldValue}
        placeholder={placeholder}
        autoResize={autoresize}
        onChange={e => onInput(e.target.value)}
      />
    </div>
  );
}
