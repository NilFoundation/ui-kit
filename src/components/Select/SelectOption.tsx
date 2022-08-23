/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, useEffect } from 'react';
import { MenuItem } from '../Menu';
import { useSelectContext } from './SelectContext';

/**
 * Props.
 */
export interface SelectOptionProps<T> {
    children: string;
    value: T;
    disabled?: boolean;
    defaultSelected?: boolean;
}

/**
 * Select option component.
 *
 * @param {SelectOptionProps} props - Props.
 * @returns - React component.
 */
export const SelectOption = <T extends unknown>({
    value,
    children,
    disabled,
    defaultSelected,
}: SelectOptionProps<T>): ReactElement<SelectOptionProps<T>> => {
    const { onSelectOption } = useSelectContext<T>();
    const handleSelectOption = (): void => onSelectOption({ title: children, value });

    useEffect(() => {
        !disabled && defaultSelected && handleSelectOption();
    }, [defaultSelected]);

    return (
        <MenuItem
            title={children}
            onSelect={handleSelectOption}
            disabled={disabled}
        />
    );
};
