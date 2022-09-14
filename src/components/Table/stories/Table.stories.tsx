/**
 * @file Stories.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Table as TableComponent } from '../Table';

export default {
    component: TableComponent,
    title: 'components/Table',
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
} as ComponentMeta<typeof TableComponent>;

export const Table: Story = args => (
    <TableComponent {...args}>
        <thead>
            <tr>
                {['Name', 'Surname', 'Age', 'Posiiton'].map(x => (
                    <th key={x}>{x}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            <tr>
                {['Erika', 'Mustermann', '22', 'HR-manager'].map(x => (
                    <td key={x}>{x}</td>
                ))}
            </tr>
            <tr>
                {['John', 'Doe', '25', 'Developer'].map(x => (
                    <td key={x}>{x}</td>
                ))}
            </tr>
        </tbody>
    </TableComponent>
);
