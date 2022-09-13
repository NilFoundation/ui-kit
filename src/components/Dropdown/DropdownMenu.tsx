/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useContext } from 'react';
import { DropdownContext } from './DropdownContext';
import { Menu } from '../Menu';
import { Transition } from '../Transition';

/**
 * Props.
 */
export type DropdownMenuProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Provide aria-labelledby to improve accessibility.
     */
    'aria-labelledby'?: string;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
};

/**
 * Dropdown menu component.
 *
 * @param {DropdownMenuProps} props - Props.
 * @returns React component.
 */
export const DropdownMenu = ({
    children,
    className,
    'aria-labelledby': ariaLabeledBy,
}: DropdownMenuProps): ReactElement => {
    const { visible, onDropdownToggle } = useContext(DropdownContext);

    return (
        <Transition
            name="fade"
            in={visible}
        >
            <Menu
                onCloseMenu={() => onDropdownToggle(false)}
                visible
                aria-labelledby={ariaLabeledBy}
                className={className}
            >
                {children}
            </Menu>
        </Transition>
    );
};
