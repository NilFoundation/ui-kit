/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import { HorizontalPosition } from '../../enums';

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
    verticalAlign?: MediaItemAlign;
    /**
     * Position. Right aligned should be placed after the media body.
     *
     * @default left
     */
    position?: HorizontalPosition;
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
    verticalAlign = 'middle',
    position = 'left',
}: MediaItemProps): ReactElement => (
    <div className={`media-${position} media-${verticalAlign} ${className ?? ''}`}>{children}</div>
);
