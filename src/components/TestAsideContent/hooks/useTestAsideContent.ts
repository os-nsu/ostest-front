import { useState } from 'react';

export const useTestAsideContent = () => {
  const [isEditing, setIsEditing] = useState(false);

  return { isEditing, setIsEditing };
};
