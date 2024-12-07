import React from 'react';
import DefaultFieldLabel from '@/UI/label/DefaultFieldLabel/DefaultFieldLabel';
import IconButton from '@/UI/buttons/IconButton/IconButton';
import styles from '@styles/components/AttachableList.module.scss';

interface AttachableListProps {
  label: string;
  emptyText: string;
  entities: { id: number; name: string }[];
  onAttach: () => void;
  onDetach: (id: number) => void;
  attachIcon: string;
  detachIcon: string;
}

export default function AttachableList({
  label,
  emptyText,
  entities,
  onAttach,
  onDetach,
  attachIcon,
  detachIcon,
}: AttachableListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <DefaultFieldLabel label={label} />
        <IconButton icon={attachIcon} onClick={onAttach} />
      </div>
      {entities.length > 0 ? (
        <div>
          {entities.map(({ id, name }) => (
            <div className={styles.list} key={name}>
              <div className={styles.listItem}>{name}</div>
              <IconButton icon={detachIcon} onClick={() => onDetach(id)} />
            </div>
          ))}
        </div>
      ) : (
        <span>{emptyText}</span>
      )}
    </div>
  );
}
