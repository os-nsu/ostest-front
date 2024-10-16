import { useNavigate } from 'react-router-dom';
import { Laboratory } from '../../../../../../types/Laboratory.ts';

interface LabElementWrapperProps {
  rowData: Laboratory;
}

export default function LabElementWrapper({ rowData }: LabElementWrapperProps) {
  const navigate = useNavigate();

  return <a onClick={() => navigate(`/lab/${rowData.id}`)}>{rowData.name}</a>;
}
