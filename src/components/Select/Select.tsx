/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, useRef, useState } from 'react';
import clsx from 'clsx';
import { Size } from '../../enums';
import { InputGroup } from '../InputGroup';
import { Input } from '../Input';
import { Menu } from '../Menu';
import { SelectOption, SelectOptionProps } from './SelectOption';
import { SelectOptionModel } from './SelectOptionModel';
import { uniqueId } from '../../helpers';
import { SelectContext } from './SelectContext';
import { Icon } from '../Icon';

/**
 * Props.
 */
export interface SelectProps<T> {
    /**
     * Component children. Expected to contain {@link ../SelectOption}
     */
    children: ReactElement<SelectOptionProps<T>>[] | ReactElement<SelectOptionProps<T>>;
    /**
     * Callback on select option.
     */
    onSelect?: (value: T) => void;
    /**
     * Component size.
     */
    size?: Size;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Displays when there are nothing to select.
     */
    noItemsMessage?: string;
    /**
     * Displays when nothing is selected.
     */
    placeholder?: string;
    /**
     * Disable component.
     */
    disabled?: boolean;
    /**
     * Id.
     */
    id?: string;
    /**
     * Allows to clear selected value and adds clear icon.
     */
    clearable?: boolean;
}

/**
 * Select component.
 *
 * @param {SelectProps} props - Props.
 * @returns - React component.
 */
export const Select = <T,>({
    className,
    onSelect,
    size = Size.md,
    children,
    noItemsMessage = 'No items to select',
    placeholder = 'No items selected',
    disabled,
    id,
    clearable,
}: SelectProps<T>): ReactElement => {
    const ref = useRef<HTMLInputElement>(null);
    const refId = useRef(uniqueId('select-'));
    const selectId = id ?? refId.current;
    const selectClassName = clsx('select', className && className);

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selected, setSelected] = useState<SelectOptionModel<T>>();
    const iconName = `angle-${dropdownVisible ? 'up' : 'down'}`;

    const clearSelect = (): void => {
        if (!ref.current) {
            return;
        }

        if (!clearable) {
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
        <SelectContext.Provider value={{ selected, onSelectOption }}>
            <div className={selectClassName}>
                <InputGroup size={size}>
                    <Input
                        readOnly
                        ref={ref}
                        id={selectId}
                        value={selected?.title ?? ''}
                        disabled={disabled}
                        placeholder={placeholder}
                    />
                    {clearable && !!selected && (
                        <InputGroup.Icon
                            iconName="times"
                            onClick={clearSelect}
                        />
                    )}
                    <InputGroup.Button
                        onClick={(): void => setDropdownVisible(!dropdownVisible)}
                        disabled={disabled}
                        aria-haspopup={true}
                        aria-expanded={dropdownVisible}
                    >
                        <Icon iconName={iconName} />
                    </InputGroup.Button>
                </InputGroup>
                <Menu
                    visible={dropdownVisible}
                    onCloseMenu={(): void => setDropdownVisible(false)}
                    role="listbox"
                >
                    {!children && noItemsMessage}
                    {children}
                </Menu>
            </div>
        </SelectContext.Provider>
    );
};

/**
 * Component extensions.
 */
Select.Option = SelectOption;
