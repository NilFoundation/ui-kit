/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import clsx from 'clsx';

/**
 * Props.
 */
export type ImageProps = {
    /**
     * Image source.
     */
    source: string;
    /**
     * Shapes the image to a thumbnail.
     */
    thumbnail?: boolean;
    /**
     * Applies max-width: 100%, height: auto, and display:block to the image.
     */
    responsive?: boolean;
    /**
     * Adds border-radius to image.
     */
    rounded?: boolean;
} & Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src'>;

/**
 * Image component.
 *
 * @param {ImageProps} props - Props.
 * @returns React component.
 */
export const Image = ({
    source,
    alt = '',
    rounded,
    thumbnail,
    responsive,
    className,
    ...rest
}: ImageProps): ReactElement => {
    const imgClassName = clsx(
        className && className,
        thumbnail && 'img-thumbnail',
        responsive && 'img-responsive',
        rounded && 'img-rounded',
    );

    return (
        <img
            alt={alt}
            src={source}
            className={imgClassName}
            {...rest}
        />
    );
};
