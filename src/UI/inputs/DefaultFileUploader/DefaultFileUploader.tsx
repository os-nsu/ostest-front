import { FileUpload, FileUploadSelectEvent } from 'primereact/fileupload';
import '@styles/components/DefaultFileUploader.scss';
import { useRef } from 'react';

interface DefaultFileUploaderProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  placeholder?: string;

  onSelect?: (files: File[]) => void;
}

export default function DefaultFileUploader({
  label,
  accept,
  multiple,
  placeholder,
  onSelect,
}: DefaultFileUploaderProps) {
  const fieldRef = useRef<FileUpload | null>(null);

  return (
    <div className="container">
      {label ? <label>{label}</label> : null}
      <FileUpload
        ref={fieldRef}
        customUpload
        mode="basic"
        accept={accept}
        multiple={multiple}
        chooseLabel={placeholder}
        onSelect={(e: FileUploadSelectEvent) => onSelect && onSelect(e.files)}
        uploadHandler={() => fieldRef.current?.clear()}
      />
    </div>
  );
}
