import { createContext, useContext } from 'react';
import { createStore, useStore } from 'zustand';
import { IGlobalStore } from './types';
import type { ColorScheme } from '@mantine/core';

export type GlobalStore = ReturnType<typeof initializeGlobalStore>;

const GlobalContext = createContext<GlobalStore | null>(null);

export const GlobalStoreProvider = GlobalContext.Provider;

export const useGlobalStore = <T>(selector: (state: IGlobalStore) => T) => {
  const store = useContext(GlobalContext);

  if (!store) throw new Error('GlobalContext is missing the provider');

  return useStore(store, selector);
};

export const initializeGlobalStore = (preloadState: Partial<IGlobalStore>) => {
  return createStore<IGlobalStore>((set, get) => {
    return {
      ...preloadState,
      state: 'finished',
      colorScheme: 'light',
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
        set({
          colorScheme:
            colorScheme ?? (get().colorScheme === 'dark' ? 'light' : 'dark'),
        });
      },
    };
  });
};
