/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Switch as SwitchComponent } from '../Switch';

export default {
    component: SwitchComponent,
    title: 'form controls/Switch',
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
    },
};

export const Switch: Story = args => <SwitchComponent {...args} />;
