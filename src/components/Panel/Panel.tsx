/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import { Variant } from '../../enums';
import { PanelFooter } from './PanelFooter';
import { PanelContent } from './PanelContent';
import { PanelImage } from './PanelImage';
import { PanelHeader } from './PanelHeader';
import { PanelTitle } from './PanelTitle';
import './Panel.scss';

/**
 * Props.
 */
export type PanelProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Changes panel color scheme.
     */
    variant?: Variant;
    /**
     * Provide className to customize appearance.
     */
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
    variant = Variant.default,
    className,
}: PanelProps): ReactElement => (
    <div className={`panel panel-${variant} ${className ? className : ''}`}>{children}</div>
);

/**
 * Component extensions.
 */
Panel.Footer = PanelFooter;
Panel.Content = PanelContent;
Panel.Image = PanelImage;
Panel.Header = PanelHeader;
