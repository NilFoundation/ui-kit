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
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Applies active state.
     */
    active?: boolean;
    /**
     * Applies disabled state.
     */
    disabled?: boolean;
    /**
     * Action to fire on click.
     */
    onClick?: () => void;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Adds anchor behaviour.
     */
    href?: string;
};

/**
 * NavListElement.
 *
 * @param {NavListElementProps} props - Props.
 * @returns React component.
 */
export const NavListElement = ({
    children,
    onClick,
    active,
    disabled,
    className,
    href,
}: NavListElementProps): ReactElement => {
    const { onToggle } = useContext(NavListContext);

    const handleSelectElement = (): void => {
        onClick && onClick();
        onToggle && onToggle();
    };

    const onClickHandler = (): void => handleSelectElement();
    const [onEnterKeyPress] = useKeyPress(handleSelectElement, [KeyboardEventKey.enter], {
        preventDefault: false,
    });

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
            <a href={href}>{children}</a>
        </li>
    );
};
