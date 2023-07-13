export { default as User } from './User';

import type { Meta, StoryObj } from '@storybook/react';

import User from './User.tsx';

const meta = {
  component: User,
  parameters: {},
} satisfies Meta<typeof User>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
