/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { FormCheckBase, FormCheckBaseProps } from '../FormCheckBase';

/**
 * Props.
 */
type CheckboxProps = {
    indeterminate?: boolean;
} & Omit<FormCheckBaseProps, 'type'>;

/**
 * Checkbox.
 *
 * @param {CheckboxProps} props - Props.
 * @returns React component.
 */
export const Checkbox = ({
    indeterminate = false,
    onChange,
    ...rest
}: CheckboxProps): ReactElement => {
    const [indeterminateState, setIndeterminateState] = useState(indeterminate);

    useEffect(() => {
        if (indeterminate) {
            setIndeterminateState(indeterminate);
        }
    }, [indeterminate]);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        if (indeterminateState) {
            setIndeterminateState(false);
        }

        onChange && onChange(e);
    };

    const getInputRef = (input: HTMLInputElement | null): void => {
        if (input) {
            input.indeterminate = indeterminateState;
        }
    };

    return (
        <FormCheckBase
            type="checkbox"
            ref={getInputRef}
            onChange={changeHandler}
            {...rest}
        />
    );
};
