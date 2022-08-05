/**
 * @file React component unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import {PageContainer} from '../PageContainer';
import {render} from '@testing-library/react';

describe('PageContainer', () => {
    it('Renders', () => {
        render(<PageContainer>content</PageContainer>);
    });
});
