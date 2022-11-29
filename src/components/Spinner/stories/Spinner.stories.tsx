/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Spinner as SpinnerComponent } from '../Spinner';
import { Size } from '../../../enums';

export default {
    component: SpinnerComponent,
    title: 'components/Spinner',
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        size: {
            control: 'select',
        },
        type: {
            control: 'select',
        },
    },
} as ComponentMeta<typeof SpinnerComponent>;

export const Spinner: Story = args => <SpinnerComponent {...args} />;

Spinner.args = {
    size: Size.md,
    variant: 'light',
    type: 'border',
};
