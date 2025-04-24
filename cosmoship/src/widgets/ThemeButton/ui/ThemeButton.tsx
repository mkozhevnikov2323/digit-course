import { Brightness4, Brightness7 } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useAtom } from 'jotai';
import React from 'react';

import { themeAtom } from '../model/atoms/themeAtom';
import { ThemeState } from '../model/types/themeSchema';

export const ThemeButton = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const handleToggle = () => {
    setTheme((prev) =>
      prev === ThemeState.LIGTH ? ThemeState.DARK : ThemeState.LIGTH,
    );
  };

  return (
    <IconButton
      onClick={handleToggle}
      color="inherit"
    >
      {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};
