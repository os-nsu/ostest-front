import { useRef, useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';

interface UseDefaultSearchComponentProps<T> {
  options: T[];
  getOptionLabel: (option: T) => string;
}

export function useDefaultSearchComponent<T>({
  options,
  getOptionLabel,
}: UseDefaultSearchComponentProps<T>) {
  const [filteredOptions, setFilteredOptions] = useState<T[]>([]);
  const autoCompleteRef = useRef<AutoComplete>(null);
  const [searchText, setSearchText] = useState<string>('');

  const searchOptions = (event: { query: string }) => {
    if (!event.query || event.query.trim() === '') {
      setFilteredOptions(options);
      return;
    }

    setFilteredOptions(
      options.filter(option =>
        getOptionLabel(option)
          .toLowerCase()
          .includes(event.query.toLowerCase()),
      ),
    );
  };

  const handleFocus = () => {
    searchOptions({ query: '' });
    autoCompleteRef.current?.show();
  };

  return {
    autoCompleteRef,
    filteredOptions,
    searchOptions,
    handleFocus,
    setSearchText,
    searchText,
  };
}
