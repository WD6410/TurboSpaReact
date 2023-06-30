export { default as TextInput } from './TextInput';

import type { Meta, StoryObj } from '@storybook/react';

import TextInput from './TextInput.tsx';

const meta = {
  component: TextInput,
  parameters: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
