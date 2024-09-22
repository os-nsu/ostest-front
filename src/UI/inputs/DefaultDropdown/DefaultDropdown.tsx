import { Dropdown } from 'primereact/dropdown';
import { SelectItem } from 'primereact/selectitem';
import { useDefaultDropdown } from '@UI/inputs/DefaultDropdown/hooks/useDefaultDropdown.ts';
import '@styles/components/DefaultDropdown.scss';

interface DefaultDropdownProps {
  label?: string;
  options: SelectItem[];
  value?: string;

  onSelect?: (value?: string) => void;
}

export default function DefaultDropdown({
  label,
  options,
  value,
  onSelect,
}: DefaultDropdownProps) {
  const { selectedOption, onChange } = useDefaultDropdown(value, onSelect);

  return (
    <div className="container">
      {label ? <label>{label}</label> : null}
      <Dropdown value={selectedOption} options={options} onChange={onChange} />
    </div>
  );
}
