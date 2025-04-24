import React from 'react';

// import { LoginForm } from '@/features/Authorization';
import { Navbar } from '@/widgets/Navbar';

import AppRouter from './providers/router/AppRouter';

export const App: React.FC = (): React.ReactNode => {
  return (
    <div>
      <Navbar />
      {/* <LoginForm /> */}
      <AppRouter />
    </div>
  );
};
