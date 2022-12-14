/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    DetailedHTMLProps,
    forwardRef,
    ForwardRefExoticComponent,
    HTMLAttributes,
    ReactElement,
    RefAttributes,
} from 'react';
import clsx from 'clsx';
import { Size } from '../../enums';
import { InputGroupText } from './InputGroupText';

/**
 * Input group props.
 */
export type InputGroupProps = {
    /**
     * Component size.
     */
    size?: keyof typeof Size;
} & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

/**
 * Compounded Alert component type.
 */
type CompoundedInputGroupComponent = {
    Text: typeof InputGroupText;
} & ForwardRefExoticComponent<InputGroupProps & RefAttributes<HTMLDivElement>>;

/**
 * Input group component.
 *
 * @param {InputGroupProps} props - Props.
 * @returns - React component.
 */
export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(function InputGroup(
    { className, size = 'md', children, ...rest },
    ref,
): ReactElement {
    const inputGroupClassName = clsx(
        'input-group',
        className && className,
        size !== 'md' && `input-group-${size}`,
    );

    return (
        <div
            ref={ref}
            className={inputGroupClassName}
            {...rest}
        >
            {children}
        </div>
    );
}) as CompoundedInputGroupComponent;

/**
 * Component extensions.
 */
InputGroup.Text = InputGroupText;
