import LabPageTitle from './components/LabPageTitle/LabPageTitle';
import LabTable from './components/LabTable/LabTable';
import { useLabPageContent } from '@/components/LabPageContent/hooks/useLabPageContent.ts';

export default function LabPageContent() {
  const { isLoading, labs } = useLabPageContent();

  return (
    <div className="w-full max-w-7xl">
      <LabPageTitle />
      <LabTable />
    </div>
  );
}
