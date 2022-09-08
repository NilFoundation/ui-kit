/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';

/**
 * Props.
 */
export type MediaBodyProps = {
    /**
     * Component children.
     */
    children?: ReactNode;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
};

/**
 * Media body component.
 *
 * @param {MediaBodyProps} props - Props.
 * @returns React component.
 */
export const MediaBody = ({ className, children }: MediaBodyProps): ReactElement => (
    <div className={`media-body ${className ?? ''}`}>{children}</div>
);
