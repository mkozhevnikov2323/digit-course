import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@/features/Authorization';
import { ThemeWrapper } from '@/widgets/ThemeButton';
import { ReduxStoreProvider } from './redux/ReduxStoreProvider';
import { OrderFlowProvider } from '@/processes/OrderProcess/ui/OrderFlowProvider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ReduxStoreProvider>
          <OrderFlowProvider>
            <ThemeWrapper>{children}</ThemeWrapper>
          </OrderFlowProvider>
        </ReduxStoreProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};
