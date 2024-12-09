import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useNavigationHeaderState(activeTab?: string) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return {
    isMenuOpen,
    toggleMenu,
    navigateTo,
    isActiveTab: (tab: string) => activeTab === tab,
  };
}
