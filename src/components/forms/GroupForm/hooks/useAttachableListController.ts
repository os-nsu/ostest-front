import { Filter, Pagination } from '@/DTO/UserDTO';
import { useUserProvider } from '@/providers/UserProvider/useUserProvider';
import { User } from '@/types/Group';
import { useEffect, useState, useCallback } from 'react';

interface AttachableItem {
  id: number;
  name: string;
}

export const useAttachableListController = (
  items: User[],
  filters?: Filter[],
) => {
  const initialItems = items.map<AttachableItem>(item => ({
    id: item.id,
    name: `${item.firstName} ${item.secondName}`,
  }));

  const [searchText, setSearchText] = useState('');
  const [selectedItems, setSelectedItems] =
    useState<AttachableItem[]>(initialItems);
  const [filteredItems, setFilteredItems] = useState<AttachableItem[]>([]);
  const [showItemSearch, setShowItemSearch] = useState(false);

  const handleSelect = (item: AttachableItem) => {
    if (!selectedItems.some(selected => selected.id === item.id)) {
      setSelectedItems(prev => [...prev, item]);
    }
    setSearchText('');
  };

  const toggleSearch = () => setShowItemSearch(prev => !prev);

  const removeItem = (itemId: number) => {
    setSelectedItems(prev => prev.filter(item => item.id !== itemId));
  };

  const fetchFilteredItems = useCallback(() => {
    if (!searchText || !filters) {
      setFilteredItems([]);
      return;
    }

    const pagination: Pagination = {
      index: 1,
      pageSize: 20,
      totalRecords: 0,
      totalPages: 0,
    };

    useUserProvider()
      .searchUsers({
        filters: [
          ...filters,
          {
            type: 'string',
            fieldName: 'secondName',
            exactSearch: false,
            value: searchText,
          },
        ],
        pagination,
      })
      .then(response => {
        const { status, data } = response;
        if (status === 200 && data) {
          const newItems = data.users.map(user => ({
            id: user.id,
            name: `${user.firstName} ${user.secondName}`,
          }));
          setFilteredItems(newItems);
        }
      })
      .catch(error => {
        console.error('Ошибка загрузки данных:', error);
        setFilteredItems([]);
      });
  }, [filters, searchText]);

  useEffect(() => {
    fetchFilteredItems();
  }, [fetchFilteredItems]);

  return {
    selectedItems,
    filteredItems,
    showItemSearch,
    searchText,
    handleSelect,
    toggleSearch,
    removeItem,
    setSearchText,
  };
};
