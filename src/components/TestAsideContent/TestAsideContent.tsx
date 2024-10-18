import TestAsideContentHeader from '@/components/TestAsideContent/components/TestAsideContentHeader/TestAsideContentHeader.tsx';
import { Test } from '@/types/Test.ts';
import AboutTest from '@/components/AboutTest/AboutTest.tsx';

interface TestAsideContentProps {
  test: Test;
}

export default function TestAsideContent({ test }: TestAsideContentProps) {
  return (
    <div>
      <TestAsideContentHeader testName={test.name} />
      <AboutTest test={test} />
    </div>
  );
}
