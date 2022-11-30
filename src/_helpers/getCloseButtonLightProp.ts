/**
 * @file Helper function.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import { Variant } from '../enums';

/**
 * Returns close button light prop value based on provided variant.
 *
 * @param variant Component variant.
 * @returns - Close button light prop value.
 */
export const getCloseButtonLightProp = (variant: keyof typeof Variant): boolean => {
    switch (variant) {
        case 'danger':
        case 'info':
        case 'primary':
        case 'secondary':
        case 'dark':
        case 'success':
            return true;
        case 'light':
        case 'warning':
            return false;
    }
};
