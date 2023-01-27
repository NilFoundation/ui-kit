/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Tabs, Tab } from 'react-bootstrap';
import { loremIpsum } from './utils/loremIpsum';

export default {
    title: 'components/Tabs',
    component: Tabs,
    argTypes: {},
};

const tabs = [
    {
        eventKey: 'tab1',
        title: 'Tab 1',
        component: <div>{loremIpsum}</div>,
    },
    {
        eventKey: 'tab2',
        title: 'Tab 2',
        component: <div>{loremIpsum}</div>,
    },
    {
        eventKey: 'tab3',
        title: 'Tab 3',
        component: <div>{loremIpsum}</div>,
        disabled: true,
    },
    {
        eventKey: 'tab4',
        title: 'Tab 4 with a looooooong title',
        component: <div>{loremIpsum}</div>,
    },
];

const Template: Story = args => {
    return (
        <Tabs {...args}>
            {tabs.map(x => (
                <Tab
                    eventKey={x.eventKey}
                    title={x.title}
                    key={x.title}
                    disabled={x.disabled}
                >
                    {x.component}
                </Tab>
            ))}
        </Tabs>
    );
};

export const _Tabs = Template.bind({});
_Tabs.args = {
    defaultActiveKey: 'tab1',
    fill: false,
    justify: false,
};
