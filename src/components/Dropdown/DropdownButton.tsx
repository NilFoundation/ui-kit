/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { KeyboardEvent, ReactElement, useContext } from 'react';
import { KeyboardEventKey } from '../../enums';
import { useKeyPress } from '../../hooks';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon';
import { DropdownContext } from './DropdownContext';

/**
 * Props.
 */
export type DropdownButtonProps = {
    /**
     * Icon to display when dropdown is opend.
     */
    iconNameDropdownOpend?: string;
    /**
     * Icon to display when dropdown is closed.
     */
    iconNameDropdownClosed?: string;
} & ButtonProps<HTMLButtonElement>;

/**
 * Dropdown button component.
 *
 * @param {DropdownButtonProps} props - Props.
 * @returns React component.
 */
export const DropdownButton = ({
    children,
    className,
    iconNameDropdownOpend = 'caret',
    iconNameDropdownClosed = 'caret',
    onKeyDown,
}: DropdownButtonProps): ReactElement => {
    const { visible, onDropdownToggle } = useContext(DropdownContext);
    const iconName = visible ? iconNameDropdownOpend : iconNameDropdownClosed;

    const [onKeyDownPress] = useKeyPress(() => {
        !visible && onDropdownToggle(true);
    }, [KeyboardEventKey.arrowDown]);

    const onKeyDownHandler = (e: KeyboardEvent<HTMLButtonElement>): void => {
        !visible && onKeyDownPress(e);
        onKeyDown && onKeyDown(e);
    };

    return (
        <Button
            active={visible}
            className={`dropdown-toggle ${className ? className : ''}`}
            onClick={(): void => onDropdownToggle(!visible)}
            onKeyDown={onKeyDownHandler}
            aria-haspopup={true}
            aria-expanded={visible}
        >
            {children}{' '}
            <Icon
                iconName={iconName}
                srOnlyText="Toggle dropdown menu"
            />
        </Button>
    );
};
