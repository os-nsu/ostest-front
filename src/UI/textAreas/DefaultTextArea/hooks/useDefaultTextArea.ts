import { useState } from 'react';

export const useDefaultTextArea = (
  defaultValue?: string,
  onChange?: (value: string) => void,
) => {
  const [fieldValue, setValue] = useState(defaultValue || '');

  const onInput = (newValue: string) => {
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };
  return {
    fieldValue,
    onInput,
  };
};
