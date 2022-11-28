/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    InputHTMLAttributes,
    useRef,
    ReactElement,
    useEffect,
    useState,
    forwardRef,
    ChangeEvent,
} from 'react';
import uniqueId from 'lodash/uniqueId';
import './FormCheck.scss';

/**
 * Form check input type.
 */
type FormCheckBaseType = 'checkbox' | 'radio';

/**
 * Props.
 */
export type FormCheckBaseProps = {
    label?: string;
    className?: string;
    type: FormCheckBaseType;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

/**
 * Form Check Base.
 *
 * @param {FormCheckBaseProps} props - Props.
 * @returns React component.
 */
export const FormCheckBase = forwardRef<HTMLInputElement, FormCheckBaseProps>(
    function FormCheckBase(
        {
            defaultChecked = false,
            label,
            className,
            id,
            checked,
            onChange,
            ...rest
        }: FormCheckBaseProps,
        ref,
    ): ReactElement {
        const [isChecked, setIsChecked] = useState(defaultChecked);
        const refId = useRef(uniqueId('checkbox-'));
        const formCheckId = id ?? refId.current;

        useEffect(() => {
            setIsChecked(!!checked);
        }, [checked]);

        useEffect(() => {
            setIsChecked(!!defaultChecked);
        }, [defaultChecked]);

        const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
            setIsChecked(e.target.checked);
            return onChange && onChange(e);
        };

        return (
            <div className={`form-check ${className ? className : ''}`}>
                <input
                    className="form-check-input"
                    id={formCheckId}
                    checked={isChecked}
                    onChange={changeHandler}
                    ref={ref}
                    {...rest}
                />
                {label && (
                    <label
                        className="form-check-label"
                        htmlFor={formCheckId}
                    >
                        {label}
                    </label>
                )}
            </div>
        );
    },
);
