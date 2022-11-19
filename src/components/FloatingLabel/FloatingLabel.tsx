/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ChangeEvent, ChangeEventHandler, ReactElement, useCallback, useState } from 'react';
import clsx from 'clsx';
import { FormLabel, FormLabelProps } from '../Form/FormLabel';
import './FloatingLabel.scss';

/**
 * Props getter.
 */
type PropsGetter = <T extends object>(
    props?: T,
) => T & { onChange: ChangeEventHandler<HTMLInputElement> };

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
    children: (propsGetter: PropsGetter) => ReactElement;
} & Omit<FormLabelProps, 'children'>;

/**
 * Form label component.
 *
 * @param {FloatingLabelProps} props - Props.
 * @returns - React component.
 */
export const FloatingLabel = ({
    children,
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

    const propsGetter = useCallback(
        (baseProps?: Record<string, unknown>) => ({
            ...baseProps,
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
                if (typeof baseProps?.onChange === 'function') {
                    baseProps.onChange(e);
                }

                setControlHasValue(!!e.target?.value);
            },
        }),
        [],
    );

    return (
        <div className={floatingLabelClassName}>
            <FormLabel {...rest}>{text}</FormLabel>
            {children(propsGetter as never)}
        </div>
    );
};
