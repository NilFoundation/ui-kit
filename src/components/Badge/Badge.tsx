/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Variant } from '../../enums';
import './Badge.scss';

/**
 * Props.
 */
export type BadgeProps = {
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
};

/**
 * Badge component.
 *
 * @param {BadgeProps} props - Props.
 * @returns React component.
 */
export const Badge = ({
    className,
    variant = Variant.default,
    children,
    rounded,
}: BadgeProps): ReactElement => {
    const badgeClassName = clsx(
        className && className,
        'label',
        `label-${variant}`,
        rounded && 'rounded',
    );

    return <span className={badgeClassName}>{children && children}</span>;
};
