import { useEffect, useState } from 'react';

export const useInput = (
  value?: string,
  onChange?: (value: string) => void,
) => {
  const [defaultValue, setDefaultValue] = useState<string>('');

  useEffect(() => {
    if (!value) {
      return;
    }

    setDefaultValue(value);
  }, [value]);

  const onInput = (value: string) => {
    setDefaultValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return {
    defaultValue,
    onInput,
  };
};
