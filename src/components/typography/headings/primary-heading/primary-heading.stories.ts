import type { Meta, StoryObj } from '@storybook/nextjs';
import { PrimaryHeading } from './primary-heading';

const meta = {
    title: 'Typography/Headings/PrimaryHeading',
    component: PrimaryHeading,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof PrimaryHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Primary Heading',
    },
};
