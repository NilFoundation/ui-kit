/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Radio as RadioComponent } from '../Radio';

export default {
    component: RadioComponent,
    title: 'form controls/Radio',
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
    },
};

export const Radio: Story = args => <RadioComponent {...args} />;
