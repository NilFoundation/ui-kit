/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Collapse as CollapseComponent } from '../Collapse';
import { Panel } from '../../Panel';

export default {
    component: CollapseComponent,
    title: 'components/Collapse',
    argTypes: {
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
} as ComponentMeta<typeof CollapseComponent>;

export const Collapse: Story = args => {
    const longText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud' +
        'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute' +
        'irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia' +
        'deserunt mollit anim id est laborum.';

    return (
        <Panel>
            <Panel.Content>
                <CollapseComponent {...args}>
                    <CollapseComponent.Button>Title</CollapseComponent.Button>
                    <CollapseComponent.Content>
                        <p>{longText}</p>
                    </CollapseComponent.Content>
                </CollapseComponent>
            </Panel.Content>
        </Panel>
    );
};
