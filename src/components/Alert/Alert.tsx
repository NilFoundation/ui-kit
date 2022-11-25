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
import { Variant } from '../../enums';
import { CloseButton } from '../Button';
import { AlertLink } from './AlertLink';

/**
 * Props.
 */
export type AlertProps = {
    /**
     * Color scheme.
     */
    variant?: keyof typeof Variant;
    /**
     * Callback to fire on alert close. Adds close icon when provided.
     */
    onClose?: () => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

/**
 * Compounded Alert component type.
 */
type CompoundedAlertComponent = {
    Link: typeof AlertLink;
} & ForwardRefExoticComponent<AlertProps & RefAttributes<HTMLDivElement>>;

/**
 * Alert component.
 *
 * @param {AlertProps} props - Props.
 * @returns React component.
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    { className, variant = Variant.info, children, onClose, role, ...rest },
    ref,
): ReactElement {
    const alertClassName = clsx(
        'alert',
        `alert-${variant}`,
        className && className,
        onClose && 'alert-dismissible',
    );
    const computedRole = role ?? variant === Variant.danger ? 'alert' : 'status';

    return (
        <div
            className={alertClassName}
            role={computedRole}
            ref={ref}
            {...rest}
        >
            {children}
            {onClose && <CloseButton onClick={onClose} />}
        </div>
    );
}) as CompoundedAlertComponent;

/**
 * Alert component extensions.
 */
Alert.Link = AlertLink;
