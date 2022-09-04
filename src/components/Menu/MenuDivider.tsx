/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';

/**
 * Menu divider component.
 *
 * @returns React component.
 */
export const MenuDivider = (): ReactElement => (
    <li
        role="separator"
        className="divider"
    />
);
