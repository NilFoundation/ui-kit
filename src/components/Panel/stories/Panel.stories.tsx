/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Args, ComponentMeta, Story } from '@storybook/react';
import { Panel as PanelComponent } from '../Panel';
import { Variant } from '../../../enums';

export default {
    component: PanelComponent,
    title: 'components/Panel',
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
        onSelect: {
            table: {
                disable: true,
            },
        },
        image: {
            control: 'boolean',
        },
    },
    args: {
        variant: Variant.default,
        header: 'Header',
        content: 'Content',
        footer: 'Footer',
    },
} as ComponentMeta<typeof PanelComponent>;

export const Panel: Story = ({ header, content, footer, image, ...rest }: Args) => {
    const imgSource =
        'https://cdn.pixabay.com/photo/2022/08/06/12/34/corsac-fox-7368515_960_720.jpg';

    return (
        <PanelComponent {...rest}>
            {header && <PanelComponent.Header>{header}</PanelComponent.Header>}
            {image && <PanelComponent.Image source={imgSource} />}
            {content && <PanelComponent.Content>{content}</PanelComponent.Content>}
            {footer && <PanelComponent.Footer>{footer}</PanelComponent.Footer>}
        </PanelComponent>
    );
};
