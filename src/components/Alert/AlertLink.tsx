/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';
import { Link, LinkProps } from '../Link';

/**
 * Props.
 */
export type AlertLinkProps = LinkProps

/**
 * Alert link component.
 *
 * @param {AlertLinkProps} props - Props.
 * @returns React component.
 */
export const AlertLink = ({children}: AlertLinkProps): ReactElement =>
    <Link className="alert-link">
        {children}
    </Link>;
