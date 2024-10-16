import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout.tsx';
import React from 'react';

export default function TestsPage() {
  return (
    <DefaultPageLayout activeTab={'tests'} onSelectTab={() => {}}>
      1234
    </DefaultPageLayout>
  );
}
