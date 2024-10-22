import { useEffect, useState } from 'react';

export const useDefaultTextArea = (
  defaultValue?: string,
  onChange?: (value: string) => void,
) => {
  const [fieldValue, setValue] = useState('');

  useEffect(() => {
    if (!defaultValue) {
      return;
    }

    setValue(defaultValue);
  }, [defaultValue]);

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
