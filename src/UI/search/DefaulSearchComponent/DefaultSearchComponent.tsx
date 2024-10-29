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
  selectedValue: T | null;
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
  selectedValue,
  showSearch,
  getOptionLabel,
  field,
}: DefaultSearchComponentProps<T>) {
  const { autoCompleteRef, filteredOptions, searchOptions, handleFocus } =
    useDefaultSearchComponent({
      options,
      onSelect,
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
            value={selectedValue}
            suggestions={filteredOptions}
            completeMethod={searchOptions}
            field={field}
            placeholder={placeholder}
            onChange={e => onSelect(e.value)}
            onFocus={handleFocus}
            onClick={handleFocus}
          />
        </div>
      )}
    </>
  );
}
