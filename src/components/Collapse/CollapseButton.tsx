/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { forwardRef, KeyboardEvent, MouseEvent, ReactElement, useContext } from 'react';
import { KeyboardEventKey } from '../../enums';
import { useKeyPress } from '../../hooks';
import { Button, ButtonProps } from '../Button';
import { CollapseContext } from './CollapseContext';

/**
 * Collapse button props.
 */
export type CollapseButtonProps = Omit<ButtonProps<HTMLButtonElement>, 'active' | 'aria-expanded'>;

/**
 * Collapse button component.
 *
 * @param {CollapseButtonProps} props - Props.
 * @returns - React component.
 */
export const CollapseButton = forwardRef<HTMLButtonElement, CollapseButtonProps>(
    function CollapseButton({ children, onClick, onKeyDown, ...rest }, ref): ReactElement {
        const { isOpen, toggleIsOpen } = useContext(CollapseContext);

        const [onKeyPress] = useKeyPress<KeyboardEvent<HTMLButtonElement>>(
            e => {
                toggleIsOpen();

                onKeyDown && onKeyDown(e);
            },
            [KeyboardEventKey.enter, KeyboardEventKey.space],
        );

        const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
            toggleIsOpen();

            onClick && onClick(e);
        };

        return (
            <Button
                aria-expanded={isOpen}
                active={isOpen}
                onKeyDown={onKeyPress}
                onClick={onClickHandler}
                ref={ref}
                {...rest}
            >
                {children}
            </Button>
        );
    },
);
