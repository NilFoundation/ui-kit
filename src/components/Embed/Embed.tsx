/**
 * @file React functional component.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, {
    DetailedHTMLProps,
    forwardRef,
    IframeHTMLAttributes,
    ReactElement,
    SyntheticEvent,
    useState,
} from 'react';
import clsx from 'clsx';
import { Spinner } from '../Spinner';

/**
 * Embed ratio type.
 */
type EmbedRatio = '1x1' | '16x9' | '4x3' | '21x9';

/**
 * Embed props.
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
     * @default 16x9
     */
    ratio?: EmbedRatio;
} & Omit<
    DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>,
    'title' | 'ref'
>;

/**
 * Embed component.
 *
 * @param {EmbedProps} props - Props.
 * @returns React component.
 */
export const Embed = forwardRef<HTMLIFrameElement, EmbedProps>(function Embed(
    { source, onLoad, title, ratio = '16x09', className, ...rest },
    ref,
): ReactElement {
    const [loaded, setLoaded] = useState(false);

    const iframeClassName = clsx(className, !loaded && 'invisible');
    const embedContainerClassName = clsx('ratio', `ratio-${ratio}`);

    const onLoadHandler = (e: SyntheticEvent<HTMLIFrameElement, Event>) => {
        setLoaded(true);
        onLoad && onLoad(e);
    };

    return (
        <div className={embedContainerClassName}>
            {!loaded && <Spinner fill />}
            <iframe
                src={source}
                className={iframeClassName}
                onLoad={onLoadHandler}
                title={title}
                ref={ref}
                {...rest}
            />
        </div>
    );
});
