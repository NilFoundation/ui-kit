/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ChangeEvent, forwardRef, ReactElement, useEffect, useState } from 'react';
import { FormCheckBase, FormCheckBaseProps } from '../FormCheckBase';

/**
 * Checkbox props.
 */
type CheckboxProps = {
    indeterminate?: boolean;
} & Omit<FormCheckBaseProps, 'type'>;

/**
 * Checkbox component.
 *
 * @param {CheckboxProps} props - Props.
 * @returns React component.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
    { indeterminate = false, onChange, ...rest },
    ref,
): ReactElement {
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

    const getInputRef = (input: HTMLInputElement | null) => {
        if (input) {
            input.indeterminate = indeterminateState;
        }

        if (typeof ref === 'function') {
            ref(input);
        } else if (ref) {
            ref.current = input;
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
});
