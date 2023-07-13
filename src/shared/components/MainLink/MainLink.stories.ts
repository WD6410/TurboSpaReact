export { default as MainLink } from './MainLink';

import type { Meta, StoryObj } from '@storybook/react';

import MainLink from './MainLink.tsx';

const meta = {
  component: MainLink,
  parameters: {},
} satisfies Meta<typeof MainLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
