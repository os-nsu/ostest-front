import { useState } from 'react';

export const useGroupAsideContent = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  return { isEditing, setIsEditing, isDeleting, setIsDeleting };
};
