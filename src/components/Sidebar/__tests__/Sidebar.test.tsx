/**
 * @file React component unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { Sidebar } from '../Sidebar';
import { render } from '@testing-library/react';

describe('Sidebar', () => {
    it('Renders', () => {
        render(<Sidebar>content</Sidebar>);
    });
});
