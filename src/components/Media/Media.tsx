/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import { MediaBody } from './MediaBody';
import { MediaHeading } from './MediaHeading';
import { MediaItem } from './MediaItem';

/**
 * Props.
 */
export type MediaProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * HTML tag to represent component.
     */
    as?: 'div' | 'li';
};

/**
 * Media component.
 *
 * @param {MediaProps} props - Props.
 * @returns React component.
 */
export const Media = ({ className, children, as: Component = 'div' }: MediaProps): ReactElement => (
    <Component className={`media ${className ?? ''}`}>{children}</Component>
);

/**
 * Component extensions.
 */
Media.Body = MediaBody;
Media.Heading = MediaHeading;
Media.Item = MediaItem;
