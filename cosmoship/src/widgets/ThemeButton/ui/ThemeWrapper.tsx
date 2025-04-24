import { CssBaseline, ThemeProvider } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';

import { getTheme } from '../config/themeConfig';
import { themeAtom } from '../model/atoms/themeAtom';

export const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode] = useAtom(themeAtom);
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
