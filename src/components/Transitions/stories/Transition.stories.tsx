/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { useState } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Transition as TransitionComponent } from '../Transition';
import { Variant } from '../../../enums';
import { Button } from '../../Button';
import { Toast } from '../../Toast';

export default {
    component: TransitionComponent,
    title: 'utilities/Transition',
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
        in: {
            table: {
                disable: true,
            },
        },
        name: {
            control: 'select',
        },
    },
    args: {
        name: 'fade',
    },
} as ComponentMeta<typeof TransitionComponent>;

export const Transition: Story = args => {
    const [visible, setVisible] = useState(true);

    return (
        <>
            <Button
                onClick={() => setVisible(!visible)}
                variant={Variant.primary}
            >
                Toggle visibility
            </Button>
            <p />
            <TransitionComponent
                name={args.name}
                in={visible}
            >
                <Toast title="Toast title">Toast component to explore transitions</Toast>
            </TransitionComponent>
        </>
    );
};
