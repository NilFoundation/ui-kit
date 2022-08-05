/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';

/**
 * Props.
 */
export type PanelFooterProps = {
    className?: string;
    children: ReactNode;
}

/**
 * Panel footer component.
 *
 * @param {PanelFooterProps} props - Props.
 * @returns React component.
 */
export const PanelFooter = ({ className, children }: PanelFooterProps): ReactElement =>
    <div className={`panel-footer ${className ? className : ''}`}>
        {children}
    </div>;
