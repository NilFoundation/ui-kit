/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { forwardRef, ReactElement } from 'react';
import { FormCheckBase, FormCheckBaseProps } from '../FormCheckBase';

/**
 * Switch props.
 */
type SwitchProps = Omit<FormCheckBaseProps, 'type' | 'role'>;

/**
 * Switch component.
 *
 * @param {SwitchProps} props - Props.
 * @returns React component.
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
    { className, ...props },
    ref,
): ReactElement {
    return (
        <FormCheckBase
            className={`form-switch ${className ?? ''}`}
            type="checkbox"
            role="switch"
            ref={ref}
            {...props}
        />
    );
});
