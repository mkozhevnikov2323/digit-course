import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import AppProviders from './providers/AppProviders.tsx';
import CssBaseline from '@mui/material/CssBaseline';

// Start MSW mocking
// if (process.env.NODE_ENV === 'development') {
//   import('./mocks/browser').then(({ worker }) => {
//     worker.start();
//   });
// }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
