import { useState } from 'react';

export const useInputDate = (
  value?: Date,
  onChange?: (value: Date) => void,
) => {
  const [defaultValue, setDate] = useState<Date | null>(value || null);

  const onInputDate = (value: Date) => {
    setDate(value);
    if (onChange) {
      onChange(value);
    }
  };

  return {
    defaultValue,
    onInputDate,
  };
};
