'use client';

import { ResultPanel } from '../components/organisms/ResultPanel';

export function Result() {
  return (
    <div className="flex min-h-full flex-col">
      <main className="mx-auto w-full max-w-content flex-1 px-4 py-8 sm:px-6 sm:py-10">
        <ResultPanel />
      </main>
    </div>
  );
}
