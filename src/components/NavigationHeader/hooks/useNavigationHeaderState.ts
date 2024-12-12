import { useState } from 'react';

export function useNavigationHeaderState(activeTab?: string) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return {
    isMenuOpen,
    toggleMenu,
    isActiveTab: (tab: string) => activeTab === tab,
  };
}
