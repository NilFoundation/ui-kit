/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Args, Story } from '@storybook/react';
import { Image as ImageComponent, LazyImage as LazyImageComponent } from '..';

export default {
    title: 'components/Image',
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        thumbnail: {
            control: 'boolean',
        },
        responsive: {
            control: 'boolean',
        },
        rounded: {
            control: 'boolean',
        },
        circle: {
            control: 'boolean',
        },
        width: {
            control: 'number',
        },
        height: {
            control: 'number',
        },
    },
    args: {
        source: 'https://cdn.pixabay.com/photo/2022/08/06/12/34/corsac-fox-7368515_960_720.jpg',
    },
};

export const Image: Story = ({ source, ...rest }: Args) => (
    <ImageComponent
        source={source}
        {...rest}
    />
);

export const LazyImage: Story = ({ source, ...rest }: Args) => (
    <LazyImageComponent
        source={source}
        {...rest}
    />
);

LazyImage.args = {
    placeholderSrc: '',
};
