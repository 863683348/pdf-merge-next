'use client';

import { TopBar } from '../components/molecules/TopBar';
import { ResultPanel } from '../components/organisms/ResultPanel';

export function Result() {
  return (
    <div className="flex min-h-full flex-col">
      <TopBar />
      <main className="mx-auto w-full max-w-content flex-1 px-6 py-10">
        <ResultPanel />
      </main>
    </div>
  );
}
