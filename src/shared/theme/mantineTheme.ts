import type { MantineTheme } from '@mantine/core';
import { merge } from 'lodash-es';

export const createCustomMantineTheme = (
  theme: Partial<MantineTheme>,
): MantineTheme => {
  return merge(
    {
      focusRing: 'never',
      defaultRadius: 'md',
      loader: 'bars',
      cursorType: 'pointer',
    },
    theme,
  ) as MantineTheme;
};
