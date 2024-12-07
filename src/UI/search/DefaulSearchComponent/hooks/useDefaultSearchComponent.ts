import { useEffect, useRef, useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';

interface UseDefaultSearchComponentProps<T> {
  options: T[];
  getOptionLabel: (option: T) => string;
  searchText: string;
  setSearchText: (text: string) => void;
}

export function useDefaultSearchComponent<T>({
  options,
  getOptionLabel,
  searchText,
  setSearchText,
}: UseDefaultSearchComponentProps<T>) {
  const [filteredOptions, setFilteredOptions] = useState<T[]>([]);
  const autoCompleteRef = useRef<AutoComplete>(null);

  useEffect(() => {
    if (!searchText || searchText.trim() === '') {
      setFilteredOptions(options);
      return;
    }

    const filtered = options.filter(option =>
      getOptionLabel(option).toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredOptions(filtered);
  }, [searchText, options, getOptionLabel]);

  const searchOptions = (event: { query: string }) => {
    if (event.query !== searchText) {
      setSearchText(event.query);
    }
  };

  const handleFocus = () => {
    searchOptions({ query: searchText });
    autoCompleteRef.current?.show();
  };

  return {
    autoCompleteRef,
    filteredOptions,
    searchOptions,
    handleFocus,
  };
}
