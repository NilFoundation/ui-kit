/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Placeholder as PlaceholderComponent } from '../Placeholder';
import { PlaceholderAnimation } from '../PlaceholderAnimation';

export default {
    component: PlaceholderComponent,
    title: 'utilities/Placeholder',
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        onCloseMenu: {
            table: {
                disable: true,
            },
        },
        animation: {
            control: 'select',
            defaultValue: PlaceholderAnimation.glow,
        },
    },
    args: {
        duration: 1000,
    },
} as ComponentMeta<typeof PlaceholderComponent>;

export const Placeholder: Story = args => (
    <div style={{ height: '300px', width: '600px' }}>
        <PlaceholderComponent {...args} />
    </div>
);
