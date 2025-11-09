import type { Meta, StoryObj } from '@storybook/nextjs';
import { ButtonPrimary } from './button-primary';

const meta = {
    title: 'Button/ButtonPrimary',
    component: ButtonPrimary,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
        },
    },
} satisfies Meta<typeof ButtonPrimary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
        size: 'sm',
    },
};
