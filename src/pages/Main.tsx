import { useState } from 'react';
import Labs from '../components/Labs/Labs';
// import Rating from './Rating';
import Header from '../components/Header';

export default function Main() {
  const [activeTab, setActiveTab] = useState('labs');

  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === 'labs' && <Labs />}
        {activeTab === 'rating'}
      </main>
    </div>
  );
}
