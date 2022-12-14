/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Size } from '../../enums';
import { InputGroupText } from './InputGroupText';
import { InputGroupButtons } from './InputGroupButtons';

/**
 * Props.
 */
export interface InputGroupProps {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Component size.
     */
    size?: Size;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
}

/**
 * Input group component.
 *
 * @param {InputGroupProps} props - Props.
 * @returns - React component.
 */
export const InputGroup = ({
    className,
    size = Size.md,
    children,
}: InputGroupProps): ReactElement => {
    const inputGroupClassName = clsx(
        'input-group',
        className && className,
        size !== Size.md && `input-group-${size}`,
    );

    return <div className={inputGroupClassName}>{children}</div>;
};

/**
 * Component extensions.
 */
InputGroup.Addon = InputGroupText;
InputGroup.Buttons = InputGroupButtons;
