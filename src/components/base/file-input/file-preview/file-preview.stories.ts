import { Meta, StoryObj } from '@storybook/react';
import { FilePreview } from './file-preview';

const meta: Meta<typeof FilePreview> = {
    title: 'Components/FilePreview',
    component: FilePreview,
};
export default meta;

type Story = StoryObj<typeof FilePreview>;

export const Default: Story = {
    args: {
        file: new File(['test'], 'test.txt', { type: 'text/plain' }),
        onDelete: (file: File) => {
            alert(`delete: ${file.name}`)
        }
    },
};
