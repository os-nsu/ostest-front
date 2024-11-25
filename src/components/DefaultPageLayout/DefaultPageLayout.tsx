import React from 'react';
import NavigationHeader from '../NavigationHeader/NavigationHeader';

type DefaultPageLayoutProps = {
  children: React.ReactNode;
  activeTab?: string;
};

const DefaultPageLayout: React.FC<DefaultPageLayoutProps> = ({
  children,
  activeTab,
}) => {
  return (
    <>
      <header>
        <NavigationHeader activeTab={activeTab} tabs={true} />
      </header>
      <main>{children}</main>
    </>
  );
};

export default DefaultPageLayout;
