/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, CSSProperties, HTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';
import { PlaceholderAnimation } from './PlaceholderAnimation';
import './Placeholder.scss';
import { Variant } from '../../enums';

/**
 * Props.
 */
export type PlaceholderProps = {
    /**
     * Placeholder animation type.
     */
    animation?: PlaceholderAnimation;
    /**
     * Animation duration.
     *
     * @default 1000
     */
    duration?: number;
    /**
     * Minimum opacity. Takes effect only for glow animation.
     *
     * @default 0.6
     */
    minOpacity?: number;
    /**
     * Provide color scheme.
     */
    variant?: Variant;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * Placeholder component.
 *
 * @param {PlaceholderProps} props - Props.
 * @returns React component.
 */
export const Placeholder = ({
    animation = PlaceholderAnimation.glow,
    className,
    duration = 1000,
    minOpacity = 0.6,
    variant = Variant.default,
    ...rest
}: PlaceholderProps): ReactElement => {
    const placeholderClassName = clsx(
        'placeholder',
        animation === PlaceholderAnimation.glow && 'placeholder-glow',
        className && className,
        `bg-${variant}`,
    );
    const waveClassName = `wave`;

    return (
        <div
            className={placeholderClassName}
            style={
                {
                    '--animation-duration': `${duration}ms`,
                    '--min-opacity': minOpacity,
                } as CSSProperties
            }
            {...rest}
        >
            {animation === PlaceholderAnimation.wave && <div className={waveClassName} />}
        </div>
    );
};
