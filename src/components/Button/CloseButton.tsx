/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';
import { Button, ButtonProps } from './Button';

/**
 * Props.
 */
export type CloseButtonProps = {
    /**
     * Callback to fire on button click.
     */
    onClick?: () => void;
} & ButtonProps;

/**
 * Close button component.
 *
 * @param {CloseButtonProps} props - Props.
 * @returns React component.
 */
export const CloseButton = ({ onClick }: CloseButtonProps): ReactElement => (
    <Button
        className="btn-close"
        aria-label="Close"
        onClick={onClick}
    />
);
