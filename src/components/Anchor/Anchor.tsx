/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { AnchorHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';
import { HorizontalPosition } from '../../enums';
import { Icon } from '../Icon';
import './Anchor.scss';

/**
 * Props.
 */
export type AnchorProps = {
    /**
     * Customize anchor icon.
     *
     * @default 'glyphicon glyphicon-link'
     */
    iconName?: string;
    /**
     * Icon position.
     *
     * @default right
     */
    iconPosition?: HorizontalPosition;
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

/**
 * Anchor component.
 *
 * @param {AnchorProps} props - Props.
 * @returns React component.
 */
export const Anchor = ({
    children,
    className,
    iconName = 'glyphicon glyphicon-link',
    iconPosition = 'right',
    ...rest
}: AnchorProps): ReactElement => (
    <a
        className={`anchor ${className ?? ''}`}
        {...rest}
    >
        {iconPosition === 'left' && <Icon iconName={iconName} />}
        {children}
        {iconPosition === 'right' && <Icon iconName={iconName} />}
    </a>
);
