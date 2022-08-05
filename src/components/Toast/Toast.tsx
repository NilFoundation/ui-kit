/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';
import { Variant, KeyboardEventKey } from '../../enums';
import clsx from 'clsx';
import { useKeyPress } from '../../hooks';
import { Icon } from '../Icon';
import './Toast-BS-5.scss';

/**
 * Props.
 */
export type ToastProps = {
    children?: ReactNode;
    title: string;
    variant?: Variant;
    className?: string;
    timeout?: number;
    autoClose?: boolean;
    close?: () => void;
    autoFocus?: boolean;
};

/**
 * Toast component.
 *
 * @param {ToastProps} props - Props.
 * @returns React component.
 */
export const Toast = ({
    children,
    title,
    className,
    variant = Variant.default,
    timeout = 3000,
    autoClose = variant === Variant.danger,
    close,
    autoFocus = true
}: ToastProps): ReactElement => {
    const role = variant === Variant.danger ? 'alert' : 'status';
    const ariaLive = variant === Variant.danger ? 'assertive' : 'polite';
    const ref = useRef<HTMLDivElement>(null);

    const toastClassName = clsx(
        'toast',
        className && className,
        `bg-${variant}`
    );

    useEffect(() => {
        autoFocus && ref.current && ref.current.focus();
    }, [ref]);

    useEffect(() => {
        const id = autoClose && setTimeout(() => close && close(), timeout);

        return (): void => {
            if (id) {
                clearTimeout(id);
            }
        };
    }, [autoClose, timeout]);

    const [onKeyPress] = useKeyPress(() => {
        close && close();
    }, [KeyboardEventKey.escape]);

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
            onKeyPress={onKeyPress}
            className={toastClassName}
            role={role}
            aria-live={ariaLive}
            aria-atomic="true"
            ref={ref}>
            <div className="toast-header">
                <strong>{title}</strong>
                {close && <Icon iconName="close" />}
            </div>
            <div className="toast-body">
                {children}
            </div>
        </div>
    );
};
