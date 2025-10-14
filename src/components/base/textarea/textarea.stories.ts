import type { Meta, StoryObj } from '@storybook/nextjs';
import { Textarea } from './textarea';

const meta = {
    title: 'Textarea/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            defaultValue: 'Textarea Label',
            control: 'text',
        },
    },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Textarea Label',
        id: 'test',
    },
};
