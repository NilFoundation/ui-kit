/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { forwardRef, ReactElement } from 'react';
import { FormCheckBase, FormCheckBaseProps } from '../FormCheckBase';

/**
 * Radio component props.
 */
type RadioProps = Omit<FormCheckBaseProps, 'type'>;

/**
 * Radio component.
 *
 * @param {RadioProps} props - Props.
 * @returns React component.
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
    { ...props },
    ref,
): ReactElement {
    return (
        <FormCheckBase
            type="radio"
            ref={ref}
            {...props}
        />
    );
});
