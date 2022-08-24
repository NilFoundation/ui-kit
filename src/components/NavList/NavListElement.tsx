/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useContext } from 'react';
import clsx from 'clsx';
import { NavListContext } from './NavListContext';
import { useKeyPress } from '../../hooks';
import { KeyboardEventKey } from '../../enums';

/**
 * Props.
 */
type NavListElementProps = {
    children: ReactNode;
    active?: boolean;
    disabled?: boolean;
    onSelect?: () => void;
    className?: string;
};

/**
 * NavListElement.
 *
 * @param {NavListElementProps} props - Props.
 * @returns React component.
 */
export const NavListElement = ({
    children,
    onSelect,
    active,
    disabled,
    className,
}: NavListElementProps): ReactElement => {
    const { onToggle } = useContext(NavListContext);

    const handleSelectElement = (): void => {
        onSelect && onSelect();
        onToggle && onToggle();
    };

    const onClickHandler = (): void => handleSelectElement();
    const [onEnterKeyPress] = useKeyPress(handleSelectElement, [KeyboardEventKey.enter]);

    const elementClassName = clsx(
        active && 'active',
        className && className,
        disabled && 'disabled',
    );

    return (
        <li
            className={elementClassName}
            onClick={onClickHandler}
            onKeyPress={onEnterKeyPress}
            role="presentation"
        >
            <a href="#">{children}</a>
        </li>
    );
};
