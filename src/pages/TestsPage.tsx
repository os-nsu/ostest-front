import { useState } from 'react';
import ModalCreateTest from '@/components/modals/ModalCreateTest/ModalCreateTest.tsx';

export default function TestsPage() {
  const [isModalVisible, setModalVisible] = useState(true);

  return (
    <div>
      TestPage
      <ModalCreateTest
        displayed={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
}
