/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default {
    title: 'components/Breadcrumb',
    component: Breadcrumb,
    argTypes: {},
};

const data = [
    {
        title: 'Home',
        href: '#',
    },
    {
        title: 'Library',
        href: '#',
    },
    {
        title: 'Data',
        href: '#',
    },
];

const Template: Story = () => {
    return (
        <Breadcrumb>
            {data.map(({ title }) => (
                <Breadcrumb.Item key={title}>{title}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

export const _Breadcrumb = Template.bind({});
