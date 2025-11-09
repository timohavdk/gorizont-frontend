import { Meta, StoryObj } from '@storybook/react';
import { FieldError } from './field-error';

const meta: Meta<typeof FieldError> = {
    title: 'Form/FieldError',
    component: FieldError,
};
export default meta;

type Story = StoryObj<typeof FieldError>;

export const Default: Story = {
    args: {},
};
