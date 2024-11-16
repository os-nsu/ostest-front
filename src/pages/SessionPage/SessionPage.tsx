import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout.tsx';
import SessionPageContent from '@/components/SessionPageCpmponents/SessionPageContent';

export default function SessionPage() {
  return (
    <DefaultPageLayout activeTab="groups">
      <SessionPageContent />
    </DefaultPageLayout>
  );
}
