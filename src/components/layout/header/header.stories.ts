import type { Meta, StoryObj } from '@storybook/nextjs';
import { Header } from './header';

const meta = {
    title: 'Layout/Header',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderComponent: Story = {
    args: {},
};
