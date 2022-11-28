/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Checkbox as CheckboxComponent } from '../Checkbox';

export default {
    component: CheckboxComponent,
    title: 'form controls/Checkbox',
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
    },
};

export const Checkbox: Story = args => <CheckboxComponent {...args} />;
