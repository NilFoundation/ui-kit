/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';
import { FormCheckBase, FormCheckBaseProps } from '../FormCheckBase';

/**
 * Props.
 */
type SwitchProps = Omit<FormCheckBaseProps, 'type'>;

/**
 * Switch.
 *
 * @param {SwitchProps} props - Props.
 * @returns React component.
 */
export const Switch = ({className, ...props}: SwitchProps): ReactElement =>
    <FormCheckBase
        className={`form-switch ${className ? className : ''}`}
        type="checkbox"
        {...props}
    />;
