import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@/features/Authorization';
import { ThemeWrapper } from '@/widgets/ThemeButton';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeWrapper>{children}</ThemeWrapper>
      </AuthProvider>
    </BrowserRouter>
  );
};
