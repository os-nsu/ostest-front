import { InputText } from 'primereact/inputtext';
import { useInput } from './hooks/useInput.ts';
import '@styles/components/DefaultInput.scss';

interface DefaultInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;

  onChange?: (value: string) => void;
}

export default function DefaultInput({
  value,
  label,
  placeholder,
  disabled,
  onChange,
}: DefaultInputProps) {
  const { defaultValue, onInput } = useInput(value, onChange);

  return (
    <div className="container">
      {label ? <label>{label}</label> : null}
      <InputText
        placeholder={placeholder}
        value={defaultValue}
        onChange={e => onInput(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
}
