import React from 'react';
import NavigationHeader from '../NavigationHeader/NavigationHeader';

type DefaultPageLayoutProps = {
  children: React.ReactNode;
  activeTab: string;
  onSelectTab: (tab: string) => void;
};

const DefaultPageLayout: React.FC<DefaultPageLayoutProps> = ({
  children,
  activeTab,
  onSelectTab,
}) => {
  return (
    <div>
      <header>
        <NavigationHeader
          activeTab={activeTab}
          onSelectTab={onSelectTab}
          tabs={true}
        />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default DefaultPageLayout;
