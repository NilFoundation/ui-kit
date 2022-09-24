/**
 * @file Unit test.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Dropdown } from '../Dropdown';

const dropdownButtonText = 'Toggle me!';
const activeItemText = 'Active item';
const disabledItemText = 'Disabled item';
const onSelect = jest.fn();

const renderDropdown = () => (
    <Dropdown>
        <Dropdown.Button>{dropdownButtonText}</Dropdown.Button>
        <Dropdown.Menu>
            <Dropdown.Item onSelect={onSelect}>{activeItemText}</Dropdown.Item>
            <Dropdown.Item disabled>{disabledItemText}</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);

/**
 * Dropdown component unit testing.
 */
describe('dropdown', () => {
    /**
     * Component renders.
     */
    it('renders', () => {
        render(renderDropdown());

        expect(document.querySelector('.dropdown-toggle')).toBeInTheDocument();
    });

    /**
     * Visibility toggles.
     */
    it('visibility toggles', () => {
        const { queryByRole, getByText } = render(renderDropdown());
        expect(queryByRole('menu')).toBeNull();

        const dropdownButton = getByText(new RegExp(dropdownButtonText, 'i'));
        fireEvent.click(dropdownButton);

        expect(queryByRole('menu')).toBeInTheDocument();
    });
});

/**
 * Dropdown items tests.
 */
describe('dropdown items', () => {
    beforeEach(() => {
        onSelect.mockClear();
        const { getByText } = render(renderDropdown());

        const dropdownButton = getByText(new RegExp(dropdownButtonText, 'i'));
        fireEvent.click(dropdownButton);
    });

    /**
     * Closes and fires onSelect callback, when selecting an item.
     */
    it('select item', async () => {
        const menu = screen.getByRole('menu');

        const activeItem = screen.getByText(new RegExp(activeItemText, 'i'));
        fireEvent.click(activeItem);
        await new Promise(r => setTimeout(r, 300));

        expect(onSelect).toHaveBeenCalledTimes(1);
        expect(menu).not.toBeInTheDocument();
    });

    /**
     * Coudn't select disabled element.
     */
    it('select disabled item', async () => {
        const menu = screen.getByRole('menu');

        const disabledItem = screen.getByText(new RegExp(disabledItemText, 'i'));
        fireEvent.click(disabledItem);
        await new Promise(r => setTimeout(r, 300));

        expect(onSelect).not.toHaveBeenCalled();
        expect(menu).toBeInTheDocument();
    });
});
