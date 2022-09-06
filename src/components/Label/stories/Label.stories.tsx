/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Label as LabelComponent } from '../Label';
import { Variant } from '../../../enums';

export default {
    component: LabelComponent,
    title: 'components/Label',
    argTypes: {
        text: {
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
    },
} as ComponentMeta<typeof LabelComponent>;

export const Label: Story = args => <LabelComponent {...args}>{args.text}</LabelComponent>;
Label.args = {
    text: 'Label text',
    variant: Variant.default,
};
