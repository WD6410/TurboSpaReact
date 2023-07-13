import type { ColorScheme } from '@mantine/core';

export interface IGlobalStore {
  state: 'idle' | 'loading' | 'finished';
  startup: () => void;
  finish: () => void;
  colorScheme: ColorScheme;
  toggleColorScheme(colorScheme?: ColorScheme): void;
}
