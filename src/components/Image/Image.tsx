/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    ReactElement,
    DetailedHTMLProps,
    ImgHTMLAttributes,
    ReactNode,
    useState,
    Fragment,
} from 'react';
import clsx from 'clsx';
import { Placeholder } from '../Placeholder';

/**
 * Props.
 */
export type ImageProps = {
    source: string;
    placeholder?: ReactNode;
    thumbnail?: boolean;
    fluid?: boolean;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

/**
 * Image component.
 *
 * @param {ImageProps} props - Props.
 * @returns React component.
 */
export const Image = ({
    source,
    alt = '',
    placeholder,
    thumbnail,
    fluid,
    className,
    ...rest
}: ImageProps): ReactElement => {
    const [loaded, setLoaded] = useState(false);
    const onLoad = (): void => setLoaded(true);

    const imgClassName = clsx(
        className && className,
        thumbnail && 'img-thumbnail',
        fluid && 'img-fluid',
    );

    if (!loaded) {
        return <Fragment>{placeholder ? placeholder : <Placeholder />}</Fragment>;
    }

    return (
        <img
            alt={alt}
            src={source}
            loading="lazy"
            onLoad={onLoad}
            className={imgClassName}
            {...rest}
        />
    );
};
