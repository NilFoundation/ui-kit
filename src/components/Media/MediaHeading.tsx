/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';

/**
 * Props.
 */
export type MediaHeadingProps = {
    /**
     * Component children.
     */
    children?: string;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
};

/**
 * Media heading component.
 *
 * @param {MediaHeadingProps} props - Props.
 * @returns React component.
 */
export const MediaHeading = ({ className, children }: MediaHeadingProps): ReactElement => (
    <h4 className={`media-heading ${className ?? ''}`}>{children}</h4>
);
