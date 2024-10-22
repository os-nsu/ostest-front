import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout';
import LabPageContent from '@/components/LabPageContent/LabPageContent';

export default function LabsPage() {
  return (
    <DefaultPageLayout activeTab={'labs'}>
      <LabPageContent />
    </DefaultPageLayout>
  );
}
