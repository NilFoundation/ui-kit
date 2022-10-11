/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render } from '@testing-library/react';
import { NotificationProvider } from '../NotificationProvider';

/**
 * NotificationProvider component unit testing.
 */
describe('notificationProvider', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        render(<NotificationProvider>Children</NotificationProvider>);

        expect(document.querySelector('.notificationContainer')).toBeInTheDocument();
    });
});
