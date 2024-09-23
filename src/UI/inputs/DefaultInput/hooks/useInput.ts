import { useState } from 'react';

export const useInput = (
  value?: string,
  onChange?: (value: string) => void,
) => {
  const [defaultValue, setValue] = useState(value || '');

  const onInput = (value: string) => {
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return {
    defaultValue,
    onInput,
  };
};
