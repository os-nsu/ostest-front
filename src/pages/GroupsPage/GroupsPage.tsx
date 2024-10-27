import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout.tsx';
import GroupsPageContent from '@/components/GroupsPageComponents/GroupsPageContent';

export default function GroupsPage() {
  return (
    <DefaultPageLayout activeTab="tests">
      <GroupsPageContent />
    </DefaultPageLayout>
  );
}
