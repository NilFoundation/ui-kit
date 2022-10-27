/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Media as MediaComponent } from '../Media';
import { Panel } from '../../Panel';
import { Image } from '../../Images';

export default {
    component: MediaComponent,
    title: 'components/Media',
    argTypes: {
        content: {
            type: 'string',
        },
        children: {
            table: {
                disable: true,
            },
        },
        className: {
            table: {
                disable: true,
            },
        },
        as: {
            table: {
                disable: true,
            },
        },
        verticalAlign: {
            control: 'select',
            options: ['top', 'middle', 'bottom'],
            defaultValue: 'middle',
        },
    },
} as ComponentMeta<typeof MediaComponent>;

export const Media: Story = args => {
    const imgSrc =
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

    return (
        <Panel>
            <Panel.Content>
                <MediaComponent {...args}>
                    <MediaComponent.Item verticalAlign={args.alignItem}>
                        <Image
                            source={imgSrc}
                            height={100}
                            alt="Mock image"
                        />
                    </MediaComponent.Item>
                    <MediaComponent.Body>
                        <MediaComponent.Heading>{args.heading}</MediaComponent.Heading>
                        {args.content}
                    </MediaComponent.Body>
                </MediaComponent>
            </Panel.Content>
        </Panel>
    );
};

Media.args = {
    content: 'Media content',
    heading: 'Media heading',
};
