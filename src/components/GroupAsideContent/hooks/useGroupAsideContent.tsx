import { useState } from 'react';

export const useGroupAsideContent = () => {
  const [isEditing, setIsEditing] = useState(false);

  return { isEditing, setIsEditing };
};
