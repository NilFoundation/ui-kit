/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement } from 'react';
import { Image, ImageProps } from '../Images';

/**
 * Props.
 */
export type PanelImageProps = Omit<ImageProps, 'responsive'>;

/**
 * Panel image component.
 *
 * @param {PanelImageProps} props - Props.
 * @returns React component.
 */
export const PanelImage = ({ ...rest }: PanelImageProps): ReactElement => (
    <Image
        responsive
        {...rest}
    />
);
