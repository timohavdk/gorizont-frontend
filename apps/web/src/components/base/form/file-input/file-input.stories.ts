import type { Meta, StoryObj } from '@storybook/nextjs';
import { FileInput } from './file-input';

const meta = {
    title: 'Form/FileInput',
    component: FileInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            defaultValue: 'FileInput Label',
            control: 'text',
        },
    },
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Input Label',
        onChange: (files: File[]) => {
            console.log(files);
        },
    },
};
