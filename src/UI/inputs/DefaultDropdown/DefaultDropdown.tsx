import { Dropdown } from 'primereact/dropdown';
import { SelectItem } from 'primereact/selectitem';
import { useDefaultDropdown } from '@UI/inputs/DefaultDropdown/hooks/useDefaultDropdown.ts';
import '@styles/components/DefaultDropdown.scss';

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
      {label ? (
        <label>
          {label}
          {required ? <span style={{ color: '#EC4256' }}> * </span> : null}
        </label>
      ) : null}
      <Dropdown
        value={selectedOption}
        options={options}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
