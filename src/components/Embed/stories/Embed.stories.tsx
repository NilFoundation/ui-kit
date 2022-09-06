/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Embed as EmbedComponent } from '../Embed';

export default {
    component: EmbedComponent,
    title: 'components/Embed',
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        title: {
            table: {
                disable: true,
            },
            defaultValue: 'Iframe title',
        },
        ratio: {
            control: 'select',
            defaultValue: '16by9',
        },
        source: {
            defaultValue: 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0',
        },
    },
} as ComponentMeta<typeof EmbedComponent>;

export const Embed: Story = args => (
    <EmbedComponent
        {...args}
        source={args.source}
        title={args.title}
    />
);
