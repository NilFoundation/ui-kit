/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    ReactNode,
    forwardRef,
    ForwardRefExoticComponent,
    RefAttributes,
    HTMLAttributes,
} from 'react';
import { Variant } from '../../enums';
import { PanelFooter } from './PanelFooter';
import { PanelContent } from './PanelContent';
import { PanelImage } from './PanelImage';
import { PanelHeader } from './PanelHeader';
import { PanelTitle } from './PanelTitle';

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
} & HTMLAttributes<HTMLDivElement>;

/**
 * Compounded component type.
 */
type CompoundedPanelComponent = {
    Content: typeof PanelContent;
    Footer: typeof PanelFooter;
    Image: typeof PanelImage;
    Header: typeof PanelHeader;
    Title: typeof PanelTitle;
} & ForwardRefExoticComponent<PanelProps & RefAttributes<HTMLDivElement>>;

/**
 * Base panel component.
 *
 * @param {PanelProps} props - Props.
 * @returns React component.
 */
export const Panel = forwardRef<HTMLDivElement, PanelProps>(function Panel(
    { children, variant = Variant.primary, className, ...rest }: PanelProps,
    ref,
) {
    return (
        <div
            className={`panel panel-${variant} ${className ? className : ''}`}
            ref={ref}
            {...rest}
        >
            {children}
        </div>
    );
}) as CompoundedPanelComponent;

/**
 * Component extensions.
 */
Panel.Footer = PanelFooter;
Panel.Content = PanelContent;
Panel.Image = PanelImage;
Panel.Header = PanelHeader;
Panel.Title = PanelTitle;
