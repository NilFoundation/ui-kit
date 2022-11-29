/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    DetailedHTMLProps,
    forwardRef,
    HTMLAttributes,
    ReactElement,
    useEffect,
} from 'react';
import clsx from 'clsx';
import { Variant, KeyboardEventKey } from '../../enums';
import { useCombinedRef, useEventListener, useKeyPress } from '../../hooks';
import { CloseButton } from '../Button';

/**
 * Toast props.
 */
export type ToastProps = {
    /**
     * Title.
     */
    title: string;
    /**
     * Provide color schema.
     */
    variant?: keyof typeof Variant;
    /**
     * Time before removing component. Takes effect only if autoClose equals true.
     *
     * @default 3000
     */
    lifeTime?: number;
    /**
     * Close toast after timeout.
     */
    autoClose?: boolean;
    /**
     * Callback to close toast.
     */
    close?: () => void;
    /**
     * Autofocus on toast when it renders.
     */
    autoFocus?: boolean;
} & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'>;

/**
 * Toast component.
 *
 * @param {ToastProps} props - Props.
 * @returns React component.
 */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(function Toast(
    {
        children,
        title,
        className,
        variant,
        lifeTime = 3000,
        autoClose = variant !== 'danger',
        close,
        autoFocus,
        ...rest
    }: ToastProps,
    ref,
): ReactElement {
    const role = variant === Variant.danger ? 'alert' : 'status';
    const ariaLive = variant === Variant.danger ? 'assertive' : 'polite';
    const { localRef, forwardedRef } = useCombinedRef(ref);

    const toastClassName = clsx('toast show', className);
    const toastBodyClassName = clsx('toast-body', variant ? `text-bg-${variant}` : '');

    useEffect(() => {
        autoFocus && localRef.current && localRef.current.focus();
    }, [localRef, autoFocus]);

    useEffect(() => {
        const id = autoClose && setTimeout(() => close && close(), lifeTime);

        return (): void => {
            if (id) {
                clearTimeout(id);
            }
        };
    }, [autoClose, lifeTime, close]);

    const [onKeyPress] = useKeyPress(() => {
        close && close();
    }, [KeyboardEventKey.escape]);

    useEventListener({ eventType: 'keydown', callback: onKeyPress });

    return (
        <div
            className={toastClassName}
            ref={forwardedRef}
            role={role}
            aria-live={ariaLive}
            aria-atomic="true"
            {...rest}
        >
            <div className="toast-header">
                <span className="me-auto">{title}</span>
                {close && <CloseButton onClick={close} />}
            </div>
            {children && <div className={toastBodyClassName}>{children}</div>}
        </div>
    );
});
