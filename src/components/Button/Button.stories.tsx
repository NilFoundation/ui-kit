/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';
import { Variant } from '../../enums';

export default {
    component: Button,
} as ComponentMeta<typeof Button>;

export const DefaultButton: ComponentStory<typeof Button> = () => <Button>Button</Button>;
export const PrimaryButton: ComponentStory<typeof Button> = () => (
    <Button variant={Variant.primary}>Button</Button>
);
