/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Variant } from '../../enums';
import { Icon } from '../Icon';
import { AlertLink } from './AlertLink';

/**
 * Props.
 */
export type AlertProps = {
    children: ReactNode;
    variant?: Variant;
    className?: string;
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
    variant = Variant.default,
    children,
    onClose,
}: AlertProps): ReactElement => {
    const alertClassName = clsx('alert', `alert-${variant}`, className && className);

    return (
        <div className={alertClassName}>
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
