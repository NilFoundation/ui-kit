/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { ButtonGroup as ButtonGroupComponent } from '../ButtonGroup';
import { Button } from '../../Button';
import { Size } from '../../../enums';

export default {
    component: ButtonGroupComponent,
    title: 'components/ButtonGroup',
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
        size: {
            control: 'select',
            defaultValue: Size.md,
        },
    },
} as ComponentMeta<typeof ButtonGroupComponent>;

export const ButtonGroup: Story = args => (
    <ButtonGroupComponent {...args}>
        <Button>1</Button>
        <Button>1</Button>
        <Button>Wide button</Button>
        <Button>4</Button>
    </ButtonGroupComponent>
);
