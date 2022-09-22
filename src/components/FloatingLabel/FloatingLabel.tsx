/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ChangeEvent, ChangeEventHandler, ReactElement, useState } from 'react';
import clsx from 'clsx';
import { FormLabel, FormLabelProps } from '../Form';
import './FloatingLabel.scss';

/**
 * Render control.
 */
export type RenderFunction = ({ onChange }: { onChange: ChangeEventHandler }) => ReactElement;

/**
 * Props.
 */
export type FloatingLabelProps = {
    /**
     * Label text.
     */
    text: string;
    /**
     * Component children.
     */
    render: RenderFunction;
} & FormLabelProps;

/**
 * Form label component.
 *
 * @param {FloatingLabelProps} props - Props.
 * @returns - React component.
 */
export const FloatingLabel = ({
    render,
    className,
    text,
    ...rest
}: FloatingLabelProps): ReactElement => {
    const [controlHasValue, setControlHasValue] = useState(false);
    const floatingLabelClassName = clsx(
        className && className,
        'floating-label',
        controlHasValue && 'floating-label-active',
    );
    const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setControlHasValue(!!value);
    };

    return (
        <div className={floatingLabelClassName}>
            <FormLabel {...rest}>{text}</FormLabel>
            {render({ onChange })}
        </div>
    );
};
