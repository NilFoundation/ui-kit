/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';

/**
 * Alignment variations type.
 */
type MediaItemAlign = 'top' | 'middle' | 'bottom';

/**
 * Props.
 */
export type MediaItemProps = {
    /**
     * Component children.
     */
    children?: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Item alignment.
     */
    align?: MediaItemAlign;
};

/**
 * Media item component.
 *
 * @param {MediaItemProps} props - Props.
 * @returns React component.
 */
export const MediaItem = ({
    className,
    children,
    align = 'middle',
}: MediaItemProps): ReactElement => (
    <h4 className={`media-left media-${align} ${className ?? ''}`}>{children}</h4>
);
