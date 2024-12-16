import { useState } from 'react';

export const useChangePassword = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return { isModalVisible, setModalVisible };
};
