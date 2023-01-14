/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { variants } from './variants';

export default {
    title: 'components/Badge',
    component: Badge,
    argTypes: {},
};

const Template: Story = args => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {variants.map(item => {
                const cbg = args.bg || item;
                const text = item === 'light' ? 'dark' : undefined;

                return (
                    <span
                        key={item}
                        style={{ margin: 8 }}
                    >
                        <Badge
                            key={item}
                            {...args}
                            bg={cbg}
                            text={text}
                        >
                            {item}
                        </Badge>
                    </span>
                );
            })}
        </div>
    );
};

export const _Badge = Template.bind({});
_Badge.args = {};

const TemplateButton: Story = args => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '16px' }}>
            {variants.map(item => {
                const cbg = args.bg || item;

                return (
                    <Button
                        variant="dark"
                        key={item}
                    >
                        <span
                            key={item}
                            style={{ margin: 8 }}
                        >
                            {item}
                        </span>
                        <Badge
                            key={item}
                            bg={cbg}
                            text={item === 'light' ? 'dark' : undefined}
                        >
                            {args.badge}
                        </Badge>
                    </Button>
                );
            })}
        </div>
    );
};

export const _BadgeButton = TemplateButton.bind({});
_BadgeButton.args = {
    badge: '99',
};
