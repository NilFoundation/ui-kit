/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Variant } from '../../enums';
import './Label.scss';

/**
 * Props.
 */
export type LabelProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Color scheme.
     */
    variant?: Variant;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Increases border radius.
     */
    rounded?: boolean;
    /**
     * Makes label to span the entire width of the parent element.
     */
    block?: boolean;
};

/**
 * Label component.
 *
 * @param {LabelProps} props - Props.
 * @returns React component.
 */
export const Label = ({
    className,
    variant = Variant.default,
    children,
    rounded,
    block,
}: LabelProps): ReactElement => {
    const labelClassName = clsx(
        className && className,
        'label',
        `label-${variant}`,
        rounded && 'label-rounded',
        block && 'label-block',
    );

    return <span className={labelClassName}>{children && children}</span>;
};
