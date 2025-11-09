import { ComponentProps, ReactNode } from 'react';

type Slots = {
    error: ReactNode;
};

export type Props = ComponentProps<'div'> & {
    slots: Slots;
};
