'use client';

import { useAppStore } from './store/useAppStore';
import { Workbench } from './views/Workbench';
import { Result } from './views/Result';
import { ToastHost } from './components/molecules/Toast';

export default function App() {
  const view = useAppStore((s) => s.view);

  return (
    <div className="min-h-full bg-canvas text-fg">
      {view === 'workbench' ? <Workbench /> : <Result />}
      <ToastHost />
    </div>
  );
}
