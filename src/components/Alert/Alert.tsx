/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Variant } from '../../enums';
import { Icon } from '../Icon';
import { AlertLink } from './AlertLink';

type AlertVariant = Variant.danger | Variant.info | Variant.success | Variant.warning;

/**
 * Props.
 */
export type AlertProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Color scheme.
     */
    variant?: AlertVariant;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Callback to fire on alert close. Adds close icon when provided.
     */
    onClose?: () => void;
};

/**
 * Alert component.
 *
 * @param {AlertProps} props - Props.
 * @returns React component.
 */
export const Alert = ({
    className,
    variant = Variant.info,
    children,
    onClose,
}: AlertProps): ReactElement => {
    const alertClassName = clsx('alert', `alert-${variant}`, className && className);
    const role = variant === Variant.danger ? 'alert' : 'status';

    return (
        <div
            className={alertClassName}
            role={role}
        >
            {children && children}
            {onClose && (
                <Icon
                    onClick={onClose}
                    iconName="close"
                />
            )}
        </div>
    );
};

/**
 * Component extensions.
 */
Alert.Link = AlertLink;
