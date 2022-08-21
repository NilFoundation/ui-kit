/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, useContext, KeyboardEvent } from 'react';
import { DropdownContext } from '../Dropdown/DropdownContext';
import clsx from 'clsx';
import { useKeyPress } from '../../hooks';
import { KeyboardEventKey } from '../../enums';

/**
 * Props.
 */
export type MenuItemProps = {
    title: string;
    className?: string;
    disabled?: boolean;
    active?: boolean
    onSelect?: () => void;
};

/**
 * Menu item component.
 *
 * @param {MenuItemProps} props - Props.
 * @returns React component.
 */
export const MenuItem = ({
    title,
    className,
    disabled,
    active,
    onSelect
}: MenuItemProps): ReactElement => {
    const {onDropdownToggle} = useContext(DropdownContext);

    const itemClassName = clsx(
        active && 'active',
        className && className,
        disabled && 'disabled'
    );

    const onSelectHandler = (): void => {
        onSelect && onSelect();
        onDropdownToggle();
    };

    const [onToggleWithKey] = useKeyPress(onDropdownToggle, [KeyboardEventKey.escape]);
    const [onSelectWithKey] = useKeyPress(
        onSelectHandler,
        [KeyboardEventKey.enter, KeyboardEventKey.space]
    );

    const onKeyPressHandler = (e: KeyboardEvent<HTMLLIElement>): void => {
        onToggleWithKey(e);
        onSelectWithKey(e);
    };

    return (
        <li
            className={itemClassName}
            role="menuitem"
            onClick={onSelectHandler}
            onKeyPress={onKeyPressHandler}
            tabIndex={disabled ? -1 : 0}>
            {title}
        </li>
    );
};
