/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { ReactElement, ReactNode, SyntheticEvent, useState, useEffect } from 'react';
import clsx from 'clsx';
import { Image, ImageProps } from './Image';
import { Placeholder, PlaceholderAnimation } from '../Placeholder';

/**
 * Props.
 */
export type LazyImageProps = {
    /**
     * Displays, while image is not loaded yet.
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
    /**
     * Fires right after image is loaded and rendered.
     */
    onAfterRender?: () => void;
} & Omit<ImageProps, 'placeholder'>;

/**
 * Image component with lazy loading and placeholder.
 *
 * @param {LazyImageProps} props - Props.
 * @returns React component.
 */
export const LazyImage = ({
    className,
    placeholder,
    placeholderSrc,
    onLoad,
    placeholderAnimation,
    onAfterRender,
    responsive,
    width,
    height,
    ...rest
}: LazyImageProps): ReactElement => {
    const [loaded, setLoaded] = useState(false);

    const lazyImgClassName = clsx(className && className, !loaded && 'hidden');

    const renderPlaceholderElement = (): ReactNode => {
        if (placeholderSrc) {
            return (
                <Image
                    source={placeholderSrc}
                    responsive={responsive}
                    width={width}
                    height={height}
                    alt="Placeholder image"
                />
            );
        }

        if (placeholder) {
            return placeholder;
        }

        return (
            <Placeholder
                style={{ width: `${width}px`, height: `${height}px` }}
                animation={placeholderAnimation}
            />
        );
    };

    const onLazyImageLoad = (e: SyntheticEvent<HTMLImageElement>): void => {
        onLoad && onLoad(e);
        setLoaded(true);
    };

    useEffect(() => {
        loaded && onAfterRender && onAfterRender();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loaded]);

    return (
        <>
            {!loaded && renderPlaceholderElement()}
            <Image
                loading="lazy"
                onLoad={onLazyImageLoad}
                className={lazyImgClassName}
                responsive={responsive}
                width={width}
                height={height}
                {...rest}
            />
        </>
    );
};
