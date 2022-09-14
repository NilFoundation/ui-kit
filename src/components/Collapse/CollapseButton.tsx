/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { KeyboardEvent, ReactElement, useContext } from 'react';
import { KeyboardEventKey } from '../../enums';
import { useKeyPress } from '../../hooks';
import { Button, ButtonProps } from '../Button';
import { CollapseContext } from './CollapseContext';

/**
 * Props.
 */
export type CollapseButtonProps = ButtonProps<HTMLButtonElement>;

/**
 * Collapse button component.
 *
 * @param {CollapseButtonProps} props - Props.
 * @returns - React component.
 */
export const CollapseButton = ({ children, ...rest }: CollapseButtonProps): ReactElement => {
    const { isOpen, toggleIsOpen } = useContext(CollapseContext);

    const [onKeyPress] = useKeyPress<KeyboardEvent<HTMLButtonElement>>(toggleIsOpen, [
        KeyboardEventKey.enter,
        KeyboardEventKey.space,
    ]);

    return (
        <Button
            aria-expanded={isOpen}
            onKeyDown={onKeyPress}
            onClick={toggleIsOpen}
            {...rest}
        >
            {children}
        </Button>
    );
};
