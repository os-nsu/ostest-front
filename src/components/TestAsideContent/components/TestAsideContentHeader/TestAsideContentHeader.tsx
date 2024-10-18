import IconButton from '@UI/buttons/IconButton/IconButton.tsx';
import IconTrash from '@public/trash.svg';
import IconPencil from '@public/pencil_line.svg';
import IconClose from '@public/close.svg';

interface TestAsideContentHeaderProps {
  testName: string;
}

export default function TestAsideContentHeader({
  testName,
}: TestAsideContentHeaderProps) {
  return (
    <div>
      <span>{testName}</span>
      <div>
        <div>
          <IconButton icon={IconPencil} />
          <IconButton icon={IconTrash} />
        </div>
        <IconButton icon={IconClose} />
      </div>
    </div>
  );
}
