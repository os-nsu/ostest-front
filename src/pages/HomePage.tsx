import { useState } from 'react';
import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout';
import LabPageContent from '@/components/LabPageContent/LabPageContent';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('labs');

  return (
    <DefaultPageLayout activeTab={activeTab} onSelectTab={setActiveTab}>
      <main>
        {activeTab === 'labs' && <LabPageContent />}
        {activeTab === 'rating'}
        {activeTab === 'tests'}
      </main>
    </DefaultPageLayout>
  );
}
