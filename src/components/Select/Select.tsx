/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, useRef, useState } from 'react';
import { Size } from '../../src/enums';
import clsx from 'clsx';
import { InputGroup } from '../InputGroup';
import { Input } from '../Input';
import { Menu } from '../Menu';
import { SelectOption, SelectOptionProps } from './SelectOption';
import { SelectOptionModel } from './SelectOptionModel';
import { uniqueId } from 'lodash';
import { createSelectContext } from './SelectContext';

/**
 * Props.
 */
export interface SelectProps<T> {
    children: ReactElement<SelectOptionProps<T>>[] | ReactElement<SelectOptionProps<T>>;
    onSelect?: (value: T) => void;
    size?: Size;
    className?: string;
    noItemsMessage?: string;
    placeholder?: string;
    disabled?: boolean;
    id?: string;
}

/**
 * Select component.
 *
 * @param {SelectProps} props - Props.
 * @returns - React component.
 */
export const Select = <T extends unknown>({
    className,
    onSelect,
    size = Size.md,
    children,
    noItemsMessage = 'No items to select',
    placeholder = 'No items selected',
    disabled,
    id
}: SelectProps<T>): ReactElement => {
    const ref = useRef<HTMLInputElement>(null);
    const selectId = id ?? uniqueId('select-');
    const selectClassName = clsx(
        'select',
        className && className
    );

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selected, setSelected] = useState<SelectOptionModel<T>>();
    const iconName = `caret-${dropdownVisible ? 'up' : 'down'}`;

    const SelectContext = createSelectContext<T>();

    const clearSelect = (): void => {
        if (!ref.current) {
            return;
        }

        if (disabled) {
            return;
        }

        setDropdownVisible(false);
        setSelected(undefined);
    };

    const onSelectOption = (selectOption: SelectOptionModel<T>): void => {
        if (disabled) {
            return;
        }

        setSelected(selectOption);
        onSelect && onSelect(selectOption.value);
        setDropdownVisible(false);
    };

    return (
        <SelectContext.Provider value={{selected, onSelectOption}}>
            <div className={selectClassName}>
                <InputGroup size={size}>
                    <Input
                        role="select"
                        ref={ref}
                        id={selectId}
                        value={selected?.title}
                        disabled={disabled}
                        placeholder={placeholder}
                    />
                    {
                        selected &&
                            <InputGroup.Icon
                                iconName="times"
                                onClick={clearSelect}
                            />
                    }
                    <InputGroup.Icon
                        iconName={iconName}
                        onClick={():void => setDropdownVisible(!dropdownVisible)}
                    />
                </InputGroup>
                {
                    dropdownVisible &&
                        <Menu
                            onSetVisible={():void => setDropdownVisible(false)}
                            labeledBy={selectId}>
                                {!children && noItemsMessage}
                                {children}
                        </Menu>
                }
            </div>
        </SelectContext.Provider>
    );
};

/**
 * Component extensions.
 */
Select.Option = SelectOption;
