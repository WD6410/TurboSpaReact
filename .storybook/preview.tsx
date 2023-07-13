import React from 'react';
import type { Preview } from '@storybook/react';
import { HelmetProvider } from 'react-helmet-async';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (StoryFn) => (
      <HelmetProvider context={{}}>
        <StoryFn />
      </HelmetProvider>
    ),
  ],
};

export default preview;
