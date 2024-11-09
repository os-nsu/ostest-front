import { useGroupProvider } from '@/providers/GroupProvider/useGroupProvider';
import { useState } from 'react';

export const useGroupAsideContent = (id: number, onDelete: () => void) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const onSubmit = () => {
    useGroupProvider()
      .deleteGroup(`${id}`)
      .then(({ status }) => {
        if (status === 200) {
          onDelete();
        }
      })
      .catch(err => console.error(err));
  };

  return { isEditing, setIsEditing, isDeleting, setIsDeleting, onSubmit };
};
