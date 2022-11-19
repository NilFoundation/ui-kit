/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { FloatingLabel as FloatingLabelComponent } from '../FloatingLabel';
import { Input } from '../../Input';
import { Size } from '../../../enums';

export default {
    component: FloatingLabelComponent,
    title: 'form controls/FloatingLabel',
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        render: {
            table: {
                disable: true,
            },
        },
    },
    args: {
        text: 'Label text',
    },
} as ComponentMeta<typeof FloatingLabelComponent>;

export const FloatingLabel: Story = args => (
    <FloatingLabelComponent
        text={args.text}
        htmlFor="some-input"
    >
        {propsGetter => (
            <Input
                {...propsGetter({
                    size: Size.lg,
                    id: 'some-input',
                    onChange: () => {
                        // Some action
                    },
                })}
            />
        )}
    </FloatingLabelComponent>
);
