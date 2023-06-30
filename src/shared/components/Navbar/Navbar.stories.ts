export { default as Navbar } from './Navbar';

import type { Meta, StoryObj } from '@storybook/react';

import Navbar from './Navbar.tsx';

const meta = {
  component: Navbar,
  parameters: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
