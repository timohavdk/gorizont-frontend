import { ComponentProps } from 'react';
import Link from 'next/link';

export type CreateArticleLinkProps = Omit<ComponentProps<typeof Link>, 'href'>;
