/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useEffect, useCallback } from 'react';
import { MenuItem } from '../Menu';
import { useSelectContext } from './SelectContext';

/**
 * Props.
 */
export interface SelectOptionProps<T> {
    /**
     * Component children.
     */
    children?: ReactNode;
    /**
     * Value of select option.
     */
    value: T;
    /**
     * Title displaying when option was selected.
     */
    title: string;
    /**
     * Disable state.
     */
    disabled?: boolean;
    /**
     * Select this option by default.
     */
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

    const handleSelectOption = useCallback(() => {
        onSelectOption({ title, value });
    }, [title, value, onSelectOption]);

    useEffect(() => {
        defaultSelected && !disabled && handleSelectOption();
    }, [defaultSelected, disabled, handleSelectOption]);

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
