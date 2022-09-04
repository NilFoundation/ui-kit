/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';

type PanelTitleProps = {
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Component children.
     */
    children: string;
};

/**
 * Panel title component.
 *
 * @param {PanelTitleProps} props - Props.
 * @returns React component.
 */
export const PanelTitle = ({ children, className = '' }: PanelTitleProps): ReactElement => (
    <h3 className={`panelTitle ${className}`}>{children}</h3>
);
