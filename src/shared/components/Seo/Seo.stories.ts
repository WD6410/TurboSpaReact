export { default as Seo } from './Seo';

import type { Meta, StoryObj } from '@storybook/react';

import Seo from './Seo.tsx';

const meta = {
  component: Seo,
  parameters: {},
} satisfies Meta<typeof Seo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Turbo React App',
    type: 'demo',
    description: 'Template code react for common project',
  },
};
