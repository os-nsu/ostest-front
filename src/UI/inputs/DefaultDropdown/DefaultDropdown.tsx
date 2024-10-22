import { Dropdown } from 'primereact/dropdown';
import { SelectItem } from 'primereact/selectitem';
import { useDefaultDropdown } from '@UI/inputs/DefaultDropdown/hooks/useDefaultDropdown.ts';
import '@styles/components/DefaultDropdown.scss';
import DefaultFieldLabel from '@UI/label/DefaultFieldLabel/DefaultFieldLabel.tsx';

interface DefaultDropdownProps {
  label?: string;
  options: SelectItem[];
  value?: string;
  placeholder?: string;
  required?: boolean;

  onSelect?: (value?: string) => void;
}

export default function DefaultDropdown({
  label,
  options,
  value,
  placeholder,
  required,
  onSelect,
}: DefaultDropdownProps) {
  const { selectedOption, onChange } = useDefaultDropdown(value, onSelect);

  return (
    <div className="container">
      {label ? <DefaultFieldLabel label={label} isRequired={required} /> : null}
      <Dropdown
        value={selectedOption}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
