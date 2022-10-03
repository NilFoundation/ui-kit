/**
 * @file Jest global setup.
 * @copyright Yury Korotovskikh 2022 <u.korotovskiy@nil.foundation>
 */

/** IntersectionObserver mock. */
window.IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    disconnect: jest.fn()
}));

/** ScrollIntoView mock. */
Element.prototype.scrollIntoView = jest.fn();

/** MatchMedia mock. */
window.matchMedia = jest.fn(() => ({
    matches: false
}));
