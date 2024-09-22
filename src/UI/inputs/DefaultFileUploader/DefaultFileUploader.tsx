import { FileUpload, FileUploadSelectEvent } from 'primereact/fileupload';
import '../../../styles/components/DefaultFileUploader.scss';

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
  return (
    <div className="container">
      {label ? <label>{label}</label> : null}
      <FileUpload
        mode="basic"
        accept={accept}
        multiple={multiple}
        chooseLabel={placeholder}
        onSelect={(e: FileUploadSelectEvent) => onSelect && onSelect(e.files)}
      />
    </div>
  );
}
