/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';

/**
 * Props.
 */
export type PanelHeaderProps = {
    className?: string;
    children?: ReactNode;
    title?: string
}

/**
 * Panel title component.
 *
 * @param {PanelHeaderProps} props - Props.
 * @returns React component.
 */
export const PanelHeader = ({ className, children, title }: PanelHeaderProps): ReactElement =>
    <div className={`panel-heading ${className ? className : ''}`}>
        { title && <h3 className="panel-title">{title}</h3> }
        { children && children }
    </div>;
