import { createTheme } from '@mui/material/styles';

import { ThemeState } from '../model/types/themeSchema';

export const getTheme = (mode: ThemeState) =>
  createTheme({
    palette: {
      mode,
    },
  });
