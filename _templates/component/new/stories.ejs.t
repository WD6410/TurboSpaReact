---
to: src/shared/components/<%= name %>/<%= name %>.stories.ts
---

export {default as <%= name %>} from './<%= name %>'

import type { Meta, StoryObj } from '@storybook/react';

import <%= name %> from "./<%= name %>.tsx";

const meta = {
  component: <%= name %>,
  parameters: {},
} satisfies Meta<typeof <%= name %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};


