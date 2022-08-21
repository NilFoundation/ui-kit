/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import { PanelContext } from './PanelContext';
import { Variant } from '../../enums';
import { PanelFooter } from './PanelFooter';
import { PanelContent } from './PanelContent';
import { PanelImage } from './PanelImage';
import { PanelHeader } from './PanelHeader';

/**
 * Props.
 */
export type PanelProps = {
    children: ReactNode,
    loading?: boolean,
    disabled?: boolean,
    variant?: Variant
    className?: string;
};

/**
 * Base panel component.
 *
 * @param {PanelProps} props - Props.
 * @returns React component.
 */
export const Panel = ({
    children,
    loading = false,
    disabled = false,
    variant = Variant.default,
    className
}: PanelProps): ReactElement =>
    <article className={`panel panel-${variant} ${className ? className : ''}`}>
        <PanelContext.Provider value={{ disabled, loading }}>
            {children}
        </PanelContext.Provider>
    </article>;

/**
 * Component extensions.
 */
Panel.Footer = PanelFooter;
Panel.Content = PanelContent;
Panel.Image = PanelImage;
Panel.Header = PanelHeader;
