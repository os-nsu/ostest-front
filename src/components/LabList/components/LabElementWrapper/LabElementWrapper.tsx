import { useNavigate } from 'react-router-dom';
import { LaboratoryType } from '../../../../types/LaboratoryType';

interface LabNameLinkProps {
  rowData: LaboratoryType;
}

export default function LabElementWrapper({ rowData }: LabNameLinkProps) {
  const navigate = useNavigate();

  return <a onClick={() => navigate(`/lab/${rowData.id}`)}>{rowData.name}</a>;
}
