import DefaultFormFieldLayout from '@/components/layouts/DefaultFormFieldLayout/DefaultFormFieldLayout.tsx';
import DefaultSwitchbox from '@UI/inputs/DefaultSwitchbox/DefaultSwitchbox.tsx';

interface SwitchBoxFieldProps {
  label?: string;
  checkboxLabel?: string;
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
}

export default function SwitchBoxField({
  label,
  checkboxLabel,
  checked,
  onCheck,
}: SwitchBoxFieldProps) {
  return (
    <DefaultFormFieldLayout
      label={label}
      Field={
        <DefaultSwitchbox
          checked={checked}
          label={checkboxLabel}
          onCheck={onCheck}
        />
      }
    />
  );
}
