import { ComponentPropsWithoutRef, ElementType } from "react";

export type Props<TTag extends ElementType = "p"> = {
    tag?: TTag;
    className?: string;
    children?: React.ReactNode;
} & ComponentPropsWithoutRef<TTag>;
