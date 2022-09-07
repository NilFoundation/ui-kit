/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React, { useState } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Expandable as ExpandableComponent } from '../Expandable';
import { Button } from '../../Button';
import { Panel } from '../../Panel';

export default {
    component: ExpandableComponent,
    title: 'components/Expandable',
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        children: {
            table: {
                disable: true,
            },
        },
        isOpen: {
            table: {
                disable: true,
            },
        },
    },
} as ComponentMeta<typeof ExpandableComponent>;

export const Expandable: Story = args => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(!open)}>Toggle</Button>
            <ExpandableComponent
                {...args}
                isOpen={open}
            >
                <Panel>
                    <Panel.Header>Title</Panel.Header>
                    <Panel.Content>Content</Panel.Content>
                </Panel>
            </ExpandableComponent>
        </>
    );
};
