/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {ReactElement} from 'react';
import { Variant } from '../../src/enums';
import clsx from 'clsx';
import { PlaceholderAnimation } from './PlaceholderAnimation';
import './Placeholder.scss';

/**
 * Props.
 */
export type PlaceholderProps = {
    variant?: Variant;
    animation?: PlaceholderAnimation;
    className?: string;
};

/**
 * Placeholder component.
 *
 * @param {PlaceholderProps} props - Props.
 * @returns React component.
 */
export const Placeholder = ({
    variant = Variant.default,
    animation = PlaceholderAnimation.glow,
    className
}: PlaceholderProps): ReactElement => {
    const placeholderContainerClassName = clsx(
        'placeholderContainer',
        `placeholder-${variant}`,
        `placeholder-${animation}`,
        className && className
    );

    return (
        <div className={placeholderContainerClassName}>
            <span className={`placeholder bg-${variant}`} />
        </div>
    );
};
