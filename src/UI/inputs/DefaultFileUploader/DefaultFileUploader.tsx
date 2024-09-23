import { FileUpload, FileUploadSelectEvent } from 'primereact/fileupload';
import '@styles/components/DefaultFileUploader.scss';
import { useRef } from 'react';

interface DefaultFileUploaderProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  placeholder?: string;
  required?: boolean;

  onSelect?: (files: File[]) => void;
}

export default function DefaultFileUploader({
  label,
  accept,
  multiple,
  placeholder,
  required,
  onSelect,
}: DefaultFileUploaderProps) {
  const fieldRef = useRef<FileUpload | null>(null);

  return (
    <div className="container">
      {label ? (
        <label>
          {label}{' '}
          {required ? <span style={{ color: '#EC4256' }}> * </span> : null}
        </label>
      ) : null}
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
