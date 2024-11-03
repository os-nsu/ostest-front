import { useState } from 'react';

interface AttachableItem {
  name: string;
}

export const useAttachableListController = () => {
  const [selectedItem, setSelectedItem] = useState<AttachableItem | null>(null);
  const [selectedItems, setSelectedItems] = useState<AttachableItem[]>([]);
  const [showItemSearch, setShowItemSearch] = useState(false);

  const handleSelect = (item: AttachableItem) => {
    if (
      !selectedItems.some(
        selected => selected.name.toLowerCase() === item.name.toLowerCase(),
      )
    ) {
      setSelectedItems(prev => [...prev, item]);
    }
    setSelectedItem(null);
  };

  const toggleSearch = () => {
    setShowItemSearch(prev => !prev);
  };

  const removeItem = (itemName: string) => {
    setSelectedItems(prev => prev.filter(item => item.name !== itemName));
  };

  return {
    selectedItem,
    selectedItems,
    showItemSearch,
    handleSelect,
    toggleSearch,
    removeItem,
  };
};
