import { useState } from 'react';
import { DropdownChangeEvent } from 'primereact/dropdown';

export const useDefaultDropdown = (
  value?: string,
  onChangeOption?: (value?: string) => void,
) => {
  const [selectedOption, setSelectedOption] = useState(value);

  const onChange = (event: DropdownChangeEvent) => {
    setSelectedOption(event.value);
    if (onChangeOption) {
      onChangeOption(event.value);
    }
  };

  return {
    selectedOption,
    onChange,
  };
};
