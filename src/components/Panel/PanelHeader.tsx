/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';

/**
 * Props.
 */
export type PanelHeaderProps = {
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Component children.
     */
    children?: ReactNode;
};

/**
 * Panel header component.
 *
 * @param {PanelHeaderProps} props - Props.
 * @returns React component.
 */
export const PanelHeader = ({ className, children }: PanelHeaderProps): ReactElement => (
    <div className={`panel-heading ${className ? className : ''}`}>{children}</div>
);
