import { AutoComplete } from 'primereact/autocomplete';
import DefaultFieldLabel from '@/UI/label/DefaultFieldLabel/DefaultFieldLabel';
import { useDefaultSearchComponent } from './hooks/useDefaultSearchComponent';
import styles from '@styles/components/DefaultSearchComponent.module.scss';

interface DefaultSearchComponentProps<T> {
  options: T[];
  label?: string;
  placeholder?: string;
  required?: boolean;
  onSelect: (value: T) => void;
  showSearch: boolean;
  getOptionLabel: (option: T) => string;
  field: keyof T & string;
}

export default function DefaultSearchComponent<T>({
  options,
  label,
  placeholder,
  required,
  onSelect,
  showSearch,
  getOptionLabel,
  field,
}: DefaultSearchComponentProps<T>) {
  const {
    autoCompleteRef,
    filteredOptions,
    searchOptions,
    handleFocus,
    setSearchText,
    searchText,
  } = useDefaultSearchComponent({
    options,
    getOptionLabel,
  });

  return (
    <>
      {showSearch && (
        <div className={styles.container}>
          {label ? (
            <DefaultFieldLabel label={label} isRequired={required} />
          ) : null}
          <AutoComplete
            ref={autoCompleteRef}
            value={searchText}
            suggestions={filteredOptions}
            completeMethod={searchOptions}
            field={field}
            placeholder={placeholder}
            onChange={e => setSearchText(e.value)}
            onSelect={e => {
              setSearchText('');
              onSelect(e.value);
            }}
            onFocus={handleFocus}
            onClick={handleFocus}
          />
        </div>
      )}
    </>
  );
}
