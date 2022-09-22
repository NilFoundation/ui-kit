/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    DetailedHTMLProps,
    FormHTMLAttributes,
    forwardRef,
    ForwardRefExoticComponent,
    RefAttributes,
} from 'react';
import { FormGroup } from './FormGroup';
import { FormHint } from './FormHint';
import { FormLabel } from './FormLabel';

/**
 * Props.
 */
export type FormProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

/**
 * Compounded form component type.
 */
type CompoundedFormComponent = {
    Group: typeof FormGroup;
    Hint: typeof FormHint;
    Label: typeof FormLabel;
} & ForwardRefExoticComponent<FormProps & RefAttributes<HTMLFormElement>>;

/**
 * Form component.
 *
 * @param {FormProps} props - Props.
 * @returns - React component.
 */
export const Form = forwardRef<HTMLFormElement, FormProps>(function Form(
    { children, ...rest }: FormProps,
    ref,
) {
    return (
        <form
            {...rest}
            ref={ref}
        >
            {children}
        </form>
    );
}) as CompoundedFormComponent;

/**
 * Component extensions.
 */
Form.Group = FormGroup;
Form.Hint = FormHint;
Form.Label = FormLabel;
