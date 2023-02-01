/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import { Placeholder } from 'react-bootstrap';

export default {
    title: 'components/Placeholder',
    component: Placeholder,
    argTypes: {},
};

const Template: Story = () => {
    return (
        <>
            <h4>Sizing</h4>
            <Placeholder
                xs={12}
                size="lg"
            />
            <Placeholder xs={12} />
            <Placeholder
                xs={12}
                size="sm"
            />
            <Placeholder
                xs={12}
                size="xs"
            />
            <h4>Animation</h4>
            <Placeholder
                as="p"
                animation="glow"
            >
                <Placeholder xs={12} />
            </Placeholder>
            <Placeholder
                as="p"
                animation="wave"
            >
                <Placeholder xs={12} />
            </Placeholder>
        </>
    );
};

export const _Placeholder = Template.bind({});
_Placeholder.args = {};
