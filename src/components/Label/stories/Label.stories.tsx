/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Label as LabelComponent } from '../Label';

export default {
    component: LabelComponent,
    title: 'components/Label',
    argTypes: {
        text: {
            type: 'string',
        },
        onClose: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        onClose: undefined,
    },
} as ComponentMeta<typeof LabelComponent>;

export const Label: Story = args => (
    <LabelComponent
        onClose={() => {
            console.log();
        }}
        {...args}
    >
        {args.text}
    </LabelComponent>
);
Label.args = {
    text: 'Label text',
};
