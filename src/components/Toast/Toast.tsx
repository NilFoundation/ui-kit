/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Variant, KeyboardEventKey } from '../../enums';
import { useEventListener, useKeyPress } from '../../hooks';
import { CloseButton } from '../Button';
import { Panel } from '../Panel';
import './Toast.scss';

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
export const Toast = ({
    children,
    title,
    className,
    variant = Variant.default,
    lifeTime = 3000,
    autoClose = variant !== Variant.danger,
    close,
    autoFocus,
}: ToastProps): ReactElement => {
    const role = variant === Variant.danger ? 'alert' : 'status';
    const ariaLive = variant === Variant.danger ? 'assertive' : 'polite';
    const ref = useRef<HTMLDivElement>(null);

    const toastClassName = clsx('toast', className && className);

    useEffect(() => {
        autoFocus && ref.current && ref.current.focus();
    }, [ref, autoFocus]);

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
            ref={ref}
            variant={variant}
            role={role}
            aria-live={ariaLive}
            aria-atomic="true"
        >
            <Panel.Header>
                {title}
                {close && <CloseButton onClick={close} />}
            </Panel.Header>
            <Panel.Content>{children}</Panel.Content>
        </Panel>
    );
};
