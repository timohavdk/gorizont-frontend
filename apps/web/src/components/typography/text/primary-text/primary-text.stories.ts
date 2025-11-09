import { Meta, StoryObj } from '@storybook/react';
import { PrimaryText } from './primary-text';

const meta: Meta<typeof PrimaryText> = {
    title: 'Typography/Text/PrimaryText',
    component: PrimaryText,
};
export default meta;

type Story = StoryObj<typeof PrimaryText>;

export const Default: Story = {
    args: {
        children: 'test',
    },
};
