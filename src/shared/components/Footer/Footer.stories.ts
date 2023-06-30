export { default as Footer } from './Footer';

import type { Meta, StoryObj } from '@storybook/react';

import Footer from './Footer.tsx';

const meta = {
  component: Footer,
  parameters: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
