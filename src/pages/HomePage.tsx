import { useState } from 'react';
import Labs from '../components/LabList/LabList';
import Header from '../components/NavigationHeader/NavigationHeader';
import ModalCreateLab from '../components/modals/ModalCreateLab/ModalCreateLab';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('labs');

  return (
    <div>
      <Header activeTab={activeTab} onSelectTab={setActiveTab} tabs />
      <main>
        {activeTab === 'labs' && <Labs />}
        {activeTab === 'rating'}
        <ModalCreateLab displayed={true} />
      </main>
    </div>
  );
}
