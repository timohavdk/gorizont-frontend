import { ButtonIcon } from '@/components/base/button/icon/button-icon';
import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
    title: 'Button/ButtonIcon',
    component: ButtonIcon,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
        },
    },
} satisfies Meta<typeof ButtonIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Icon: Story = {
    args: {
        children: '1',
        size: 'sm',
    },
};
