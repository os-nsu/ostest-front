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
  const initialItems: AttachableItem[] = items.map(item => ({
    id: item.id,
    name: `${item.firstName} ${item.secondName}`,
  }));

  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState<AttachableItem | null>(null);
  const [selectedItems, setSelectedItems] =
    useState<AttachableItem[]>(initialItems);
  const [filteredItems, setFilteredItems] = useState<AttachableItem[]>([]);
  const [showItemSearch, setShowItemSearch] = useState(false);

  const handleSelect = (item: AttachableItem) => {
    if (!selectedItems.some(selected => selected.id === item.id)) {
      setSelectedItems(prev => [...prev, item]);
    }
    setSelectedItem(null);
    setSearchText('');
  };

  const toggleSearch = () => setShowItemSearch(prev => !prev);

  const removeItem = (itemName: string) => {
    setSelectedItems(prev => prev.filter(item => item.name !== itemName));
  };

  const fetchFilteredItems = useCallback(async () => {
    if (!searchText || !filters) {
      setFilteredItems([]);
      return;
    }

    filters.push({
      type: 'string',
      fieldName: 'secondName',
      exactSearch: false,
      value: searchText,
    });

    let allItems: AttachableItem[] = [];
    const pagination: Pagination = {
      index: 1,
      pageSize: 10,
      totalRecords: 0,
      totalPages: 0,
    };

    try {
      while (true) {
        const { status, data } = await useUserProvider().searchUsers({
          filters,
          pagination,
        });

        if (status === 200 && data) {
          const newItems = data.users.map(user => ({
            id: user.id,
            name: `${user.firstName} ${user.secondName}`,
          }));
          allItems = [...allItems, ...newItems];

          pagination.index++;
          if (pagination.index > data.pagination.totalPages) break;
        } else {
          break;
        }
      }

      setFilteredItems(allItems);
    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
      setFilteredItems([]);
    }
  }, [searchText]);

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
