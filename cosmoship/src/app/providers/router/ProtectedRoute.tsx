import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '@/features/Authorization';

interface ProtectedProps {
  children: React.ReactNode;
}

export const Protected = ({ children }: ProtectedProps) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return (
      <Navigate
        to="/"
        replace
        state={{ from: location }}
      />
    );
  }

  return <>{children}</>;
};
