import '@/app/styles/index.css';

import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/app/App';
import { AppProviders } from '@/app/providers/AppProviders';
import { worker } from '@/shared/lib/mocks/browser';

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

if (import.meta.env.DEV) {
  worker.start({
    onUnhandledRequest: 'warn',
  });
}

createRoot(root).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
);
