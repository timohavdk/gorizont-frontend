import type { Meta, StoryObj } from '@storybook/react';
import { ButtonBase } from './base/button-base';
import { ButtonPrimary } from './primary/button-primary';

const meta = {
    title: 'ButtonBase',
    component: ButtonPrimary,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ButtonBase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};