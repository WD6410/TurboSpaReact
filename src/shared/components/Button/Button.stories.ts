export { default as Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button.tsx';

const meta = {
  component: Button,
  parameters: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
