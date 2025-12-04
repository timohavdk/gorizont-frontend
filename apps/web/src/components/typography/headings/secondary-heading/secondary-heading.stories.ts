import { Meta, StoryObj } from '@storybook/react';
import { SecondaryHeading } from './secondary-heading';

const meta: Meta<typeof SecondaryHeading> = {
    title: 'Typography/Headings/SecondaryHeading',
    component: SecondaryHeading,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof SecondaryHeading>;

export const Default: Story = {
    args: {
        children: 'SecondaryHeading',
    },
};
