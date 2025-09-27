import { ComponentProps } from 'react';

export type Props = ComponentProps<'div'> & {
    file: File;
    onDelete: (file: File) => void;
};
