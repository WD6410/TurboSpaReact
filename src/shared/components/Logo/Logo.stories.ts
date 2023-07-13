export { default as Logo } from './Logo';

import type { Meta, StoryObj } from '@storybook/react';

import Logo from './Logo.tsx';

const meta = {
  component: Logo,
  parameters: {},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorScheme: 'light',
  },
};
