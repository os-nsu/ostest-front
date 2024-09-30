import { useState } from 'react';
import Labs from '../components/LabList/LabList';
import Header from '../components/NavigationHeader/NavigationHeader';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('labs');

  return (
    <div>
      <Header activeTab={activeTab} onSelectTab={setActiveTab} tabs />
      <main>
        {activeTab === 'labs' && <Labs />}
        {activeTab === 'rating'}
      </main>
    </div>
  );
}
