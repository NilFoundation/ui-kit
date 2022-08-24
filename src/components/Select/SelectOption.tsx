/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useEffect } from 'react';
import { MenuItem } from '../Menu';
import { useSelectContext } from './SelectContext';

/**
 * Props.
 */
export interface SelectOptionProps<T> {
    children?: ReactNode;
    value: T;
    title: string;
    disabled?: boolean;
    defaultSelected?: boolean;
}

/**
 * Select option component.
 *
 * @param {SelectOptionProps} props - Props.
 * @returns - React component.
 */
export const SelectOption = <T,>({
    value,
    children,
    title,
    disabled,
    defaultSelected,
}: SelectOptionProps<T>): ReactElement<SelectOptionProps<T>> => {
    const { onSelectOption, selected } = useSelectContext();
    const handleSelectOption = (): void => onSelectOption({ title, value });

    useEffect(() => {
        !disabled && defaultSelected && handleSelectOption();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultSelected]);

    return (
        <MenuItem
            onSelect={handleSelectOption}
            disabled={disabled}
            active={selected?.value === value}
        >
            {children ?? title}
        </MenuItem>
    );
};
