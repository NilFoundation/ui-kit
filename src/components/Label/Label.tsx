/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { HTMLAttributeAnchorTarget, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Variant } from '../../enums';
import { CloseButton } from '../Button';

/**
 * Props.
 */
export type LabelProps = {
    /**
     * Component children.
     */
    children: ReactNode;
    /**
     * Color scheme.
     */
    variant?: Variant;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
    /**
     * Increases border radius.
     */
    rounded?: boolean;
    /**
     * Makes label to span the entire width of the parent element.
     */
    block?: boolean;
    /**
     * Wraps label into a link with provided herf.
     */
    href?: string;
    /**
     * Specify target for link wrapper.
     */
    target?: HTMLAttributeAnchorTarget;
    /**
     * Close callback.
     */
    onClose?: () => void;
};

/**
 * Label component.
 *
 * @param {LabelProps} props - Props.
 * @returns React component.
 */
export const Label = ({
    className,
    variant = Variant.default,
    children,
    rounded,
    block,
    href,
    target,
    onClose,
}: LabelProps): ReactElement => {
    const labelClassName = clsx(
        className && className,
        'label',
        `label-${variant}`,
        rounded && 'label-rounded',
        block && 'label-block',
        onClose && 'label-closable',
    );

    const renderLabel = () => (
        <span className={labelClassName}>
            {children && children}
            {onClose && <CloseButton onClick={onClose} />}
        </span>
    );

    return href ? (
        <a
            href={href}
            target={target}
        >
            {renderLabel()}
        </a>
    ) : (
        renderLabel()
    );
};
