import { Meta, StoryObj } from '@storybook/react';
import { Field } from './field';

const meta: Meta<typeof Field> = {
    title: 'Components/Field',
    component: Field,
};
export default meta;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
    args: {},
};
