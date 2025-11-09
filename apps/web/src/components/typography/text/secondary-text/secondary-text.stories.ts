import { Meta, StoryObj } from '@storybook/react';
import { SecondaryText } from './secondary-text';

const meta: Meta<typeof SecondaryText> = {
    title: 'Typography/Text/SecondaryText',
    component: SecondaryText,
};
export default meta;

type Story = StoryObj<typeof SecondaryText>;

export const Default: Story = {
    args: {
        children: 'test',
    },
};
