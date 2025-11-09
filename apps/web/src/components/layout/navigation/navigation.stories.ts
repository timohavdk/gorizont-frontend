import type { Meta, StoryObj } from '@storybook/nextjs';
import { Navigation } from './navigation';

const meta = {
    title: 'Layout/Navigation',
    component: Navigation,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationComponent: Story = {
    args: {},
};
