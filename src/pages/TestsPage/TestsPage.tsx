import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout.tsx';
import TestsPageContent from '@/components/TestsPageComponents/TestsPageContent/TestsPageContent.tsx';

export default function TestsPage() {
  return (
    <DefaultPageLayout activeTab={'tests'} onSelectTab={() => {}}>
      {'tests'}
      <TestsPageContent />
    </DefaultPageLayout>
  );
}
