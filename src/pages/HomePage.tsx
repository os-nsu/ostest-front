import { useState } from 'react';
import Labs from '../components/LabList/LabList';
import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('labs');

  return (
    <DefaultPageLayout activeTab={activeTab} onSelectTab={setActiveTab}>
      <main>
        {activeTab === 'labs' && <Labs />}
        {activeTab === 'rating'}
        {activeTab === 'tests'}
      </main>
    </DefaultPageLayout>
  );
}
