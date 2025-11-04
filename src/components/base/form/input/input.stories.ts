import type { Meta, StoryObj } from '@storybook/nextjs';
import { Input } from './input';

const meta = {
    title: 'Form/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            defaultValue: 'Input Label',
            control: 'text',
        },
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Input Label',
        id: 'test',
    },
};
