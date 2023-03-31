/**
 * @file Stories.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Story } from '@storybook/react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

enum buttonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
    INFO = 'info',
    DARK = 'dark',
    LIGHT = 'light',
    LINK = 'link',
    OUTLINE_PRIMARY = 'outline-primary',
    OUTLINE_SECONDARY = 'outline-secondary',
    OUTLINE_SUCCESS = 'outline-success',
    OUTLINE_DANGER = 'outline-danger',
    OUTLINE_WARNING = 'outline-warning',
    OUTLINE_INFO = 'outline-info',
    OUTLINE_DARK = 'outline-dark',
    OUTLINE_LIGHT = 'outline-light',
}

export default {
    title: 'components/Button',
    component: Button,
    argTypes: {},
};

const Template: Story = args => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {Object.values(buttonVariant).map(variant => (
                <span
                    key={variant}
                    style={{ margin: 5 }}
                >
                    <Button variant={variant}>
                        {args.loading && (
                            <Spinner
                                size="sm"
                                style={{ marginRight: '8px' }}
                            />
                        )}
                        {variant}
                    </Button>
                </span>
            ))}
        </div>
    );
};

export const _Button = Template.bind({});
_Button.args = {
    loading: false,
};
