/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { HTMLAttributes, ReactElement, SyntheticEvent, useState } from 'react';
import clsx from 'clsx';
import { Spinner } from '../Spinner';
import './Embed.scss';

type EmbedRatio = '16by9' | '4by3';

/**
 * Props.
 */
export type EmbedProps = {
    /**
     * Source.
     */
    source: string;
    /**
     * Title.
     */
    title: string;
    /**
     * Ratio.
     *
     * @default 16by9
     */
    ratio?: EmbedRatio;
    /**
     * Provide className to customize appearance.
     */
    className?: string;
} & Omit<HTMLAttributes<HTMLIFrameElement>, 'title'>;

/**
 * Embed component.
 *
 * @param {EmbedProps} props - Props.
 * @returns React component.
 */
export const Embed = ({
    source,
    className,
    onLoad,
    title,
    ratio = '16by9',
    ...rest
}: EmbedProps): ReactElement => {
    const [loaded, setLoaded] = useState(false);

    const iframeClassName = clsx('embed-responsive-item', !loaded && 'invisible');
    const embedContainerClassName = clsx(
        className && className,
        'embed-responsive',
        `embed-responsive-${ratio}`,
    );

    const onLoadHandler = (e: SyntheticEvent<HTMLIFrameElement, Event>) => {
        setLoaded(true);
        onLoad && onLoad(e);
    };

    return (
        <div className={embedContainerClassName}>
            {!loaded && (
                <div className="embedSpinnerContainer">
                    <Spinner />
                </div>
            )}
            <iframe
                className={iframeClassName}
                src={source}
                onLoad={onLoadHandler}
                title={title}
                {...rest}
            />
        </div>
    );
};
