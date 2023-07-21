import type { ColorScheme } from '@mantine/core';
import { IStoreImplement } from '../types';

export interface IGlobalStore extends IStoreImplement {
  startup: () => void;
  finish: () => void;
  colorScheme: ColorScheme;
  toggleColorScheme(colorScheme?: ColorScheme): void;
}
