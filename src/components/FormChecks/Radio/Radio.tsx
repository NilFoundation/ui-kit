/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';
import { FormCheckBase, FormCheckBaseProps } from '../FormCheckBase';

/**
 * Props.
 */
type RadioProps = Omit<FormCheckBaseProps, 'type'>;

/**
 * Radio.
 *
 * @param {RadioProps} props - Props.
 * @returns React component.
 */
export const Radio = ({...props}: RadioProps): ReactElement =>
    <FormCheckBase
        type="radio"
        {...props}
    />;
