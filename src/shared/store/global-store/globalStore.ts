import { create } from 'zustand';
import { IGlobalStore } from './types';
import type { ColorScheme } from '@mantine/core';
import { sessionStorageAdapter } from 'shared/config/storageConfig';
import { THEME_KEY } from 'shared/config/constants';

export const useGlobalStore = create<IGlobalStore>((set, get) => ({
  colorScheme: (sessionStorageAdapter.get(THEME_KEY) as ColorScheme) ?? 'light',
  state: 'idle',
  startup() {
    set({
      state: 'loading',
    });
  },
  finish() {
    set({
      state: 'finished',
    });
  },
  toggleColorScheme(colorScheme?: ColorScheme) {
    const nextTheme =
      colorScheme ??
      (((sessionStorageAdapter.get(THEME_KEY) as ColorScheme) ??
        get().colorScheme) === 'dark'
        ? 'light'
        : 'dark');

    sessionStorageAdapter.set(THEME_KEY, nextTheme);

    set({
      colorScheme: nextTheme,
    });
  },
  async init() {
    console.log('run init global');
  },
}));
