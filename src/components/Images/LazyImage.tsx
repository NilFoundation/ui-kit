/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, SyntheticEvent, useState } from 'react';
import clsx from 'clsx';
import { Image, ImageProps } from './Image';
import { Placeholder, PlaceholderAnimation } from '../Placeholder';

/**
 * Props.
 */
export type LazyImageProps = {
    /**
     * Displays, while image is not loaded jet.
     */
    placeholder?: ReactNode;
    /**
     * Src of image to display, while image is not loaded jet.
     */
    placeholderSrc?: string;
    /**
     * Placeholder animation. Takes effect only with default placeholder.
     */
    placeholderAnimation?: PlaceholderAnimation;
} & ImageProps;

/**
 * Image component with lazy loading and placeholder.
 *
 * @param {LazyImageProps} props - Props.
 * @returns React component.
 */
export const LazyImage = ({
    className,
    source,
    placeholder,
    placeholderSrc,
    onLoad,
    placeholderAnimation,
    ...rest
}: LazyImageProps): ReactElement => {
    const [loaded, setLoaded] = useState(false);
    const src = !!placeholderSrc && !loaded ? placeholderSrc : source;

    const lazyImgClassName = clsx(className && className, !loaded && 'hidden');

    const renderPlaceholderElement = (): ReactNode =>
        !!placeholder ? placeholder : <Placeholder animation={placeholderAnimation} />;

    const onLazyImageLoad = (e: SyntheticEvent<HTMLImageElement>): void => {
        setLoaded(true);
        onLoad && onLoad(e);
    };

    return (
        <>
            {!loaded && !placeholderSrc && renderPlaceholderElement()}
            <Image
                loading="lazy"
                source={src}
                onLoad={onLazyImageLoad}
                className={lazyImgClassName}
                {...rest}
            />
        </>
    );
};
