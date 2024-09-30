import { useNavigate } from 'react-router-dom';
import { LaboratoryType } from '../../../../types/LaboratoryType';

interface LabElementWrapperProps {
  rowData: LaboratoryType;
}

export default function LabElementWrapper({ rowData }: LabElementWrapperProps) {
  const navigate = useNavigate();

  return <a onClick={() => navigate(`/lab/${rowData.id}`)}>{rowData.name}</a>;
}
