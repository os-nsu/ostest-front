import { AutoComplete } from 'primereact/autocomplete';
import DefaultFieldLabel from '@/UI/label/DefaultFieldLabel/DefaultFieldLabel';
import styles from '@styles/components/DefaultSearchComponent.module.scss';
import { useRef } from 'react';

interface DefaultSearchComponentProps<T> {
  options: T[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  onSelect: (value: T) => void;
  getOptionLabel: (option: T) => string;
  field: keyof T & string;
  searchText: string;
  setSearchText: (text: string) => void;
}

export default function DefaultSearchComponent<T>({
  options,
  label,
  placeholder,
  required,
  onSelect,
  field,
  searchText,
  setSearchText,
}: DefaultSearchComponentProps<T>) {
  const autoCompleteRef = useRef<AutoComplete>(null);

  const searchOptions = (event: { query: string }) => {
    if (event.query !== searchText) {
      setSearchText(event.query);
    }
  };

  const handleFocus = () => {
    autoCompleteRef.current?.show();
  };

  return (
    <div className={styles.container}>
      {label ? <DefaultFieldLabel label={label} isRequired={required} /> : null}
      <AutoComplete
        ref={autoCompleteRef}
        value={searchText}
        suggestions={options}
        completeMethod={searchOptions}
        field={field}
        placeholder={placeholder}
        onSelect={e => {
          setSearchText('');
          onSelect(e.value);
        }}
        onFocus={handleFocus}
      />
    </div>
  );
}
