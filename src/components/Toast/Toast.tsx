/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { forwardRef, ReactElement, ReactNode, useEffect } from 'react';
import clsx from 'clsx';
import { Variant, KeyboardEventKey } from '../../enums';
import { useCombinedRef, useEventListener, useKeyPress } from '../../hooks';
import { CloseButton } from '../Button';
import { Panel } from '../Panel';

/**
 * Props.
 */
export type ToastProps = {
    /**
     * Component children.
     */
    children?: ReactNode;
    /**
     * Title.
     */
    title: string;
    /**
     * Provide color schema.
     */
    variant?: Variant;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
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
};

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
        variant = Variant.default,
        lifeTime = 3000,
        autoClose = variant !== Variant.danger,
        close,
        autoFocus,
    }: ToastProps,
    ref,
): ReactElement {
    const role = variant === Variant.danger ? 'alert' : 'status';
    const ariaLive = variant === Variant.danger ? 'assertive' : 'polite';
    const { localRef, forwardedRef } = useCombinedRef(ref);

    const toastClassName = clsx('toast', className && className);

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
        <Panel
            className={toastClassName}
            ref={forwardedRef}
            variant={variant}
            role={role}
            aria-live={ariaLive}
            aria-atomic="true"
        >
            <Panel.Header>
                {title}
                {close && <CloseButton onClick={close} />}
            </Panel.Header>
            {children && <Panel.Content>{children}</Panel.Content>}
        </Panel>
    );
});
