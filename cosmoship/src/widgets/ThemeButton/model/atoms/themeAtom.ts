import { atomWithStorage } from 'jotai/utils';

import { ThemeState } from '../types/themeSchema';

export const themeAtom = atomWithStorage<ThemeState>('theme', ThemeState.LIGTH);
