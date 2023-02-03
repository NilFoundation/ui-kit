/**
 * @file Custom theme styles.
 * @copyright Yury Korotovskikh <u.korotovskiy@nil.foundation>
 */

import { CSSProperties } from 'react';
import { color } from '../color';

const prefix = 'bs-';

export const customThemeStyles: CSSProperties = {
    // accordion
    [`--${prefix}accordion-border-color`]: color.baseLight,
    [`--${prefix}accordion-button-active-color`]: color.secondary,
    [`--${prefix}accordion-button-active-bg`]: color.baseLighter,
    [`--${prefix}accordion-icon-color`]: color.secondaryDarker,
    [`--${prefix}accordion-icon-active-color`]: color.secondary,
    // card
    [`--${prefix}card-color`]: color.secondaryDarker,
    [`--${prefix}card-bg`]: color.baseLighter,
    // dropdown
    [`--${prefix}dropdown-bg`]: color.baseLighter,
    [`--${prefix}dropdown-link-color`]: color.secondaryDarker,
    [`--${prefix}dropdown-link-hover-color`]: color.secondaryDarker,
    [`--${prefix}dropdown-link-hover-bg`]: color.baseLight,
    [`--${prefix}dropdown-divider-bg`]: color.baseLight,
    // form checks - need to implement css variables customization on bootsrtrap size.
    // form control
    [`--${prefix}input-placeholder-color`]: color.secondaryDarker,
    [`--${prefix}input-focus-border-color`]: color.baseLight,
    [`--${prefix}input-border-color`]: color.baseLight,
    [`--${prefix}input-disabled-bg`]: color.baseLight,
    [`--${prefix}input-disabled-color`]: color.secondaryDark,
    [`--${prefix}form-file-button-bg`]: color.baseLighter,
    // input group
    [`--${prefix}input-group-addon-bg`]: color.baseLighter,
    [`--${prefix}input-group-addon-border-color`]: color.baseLight,
    // list group
    [`--${prefix}list-group-bg`]: color.base,
    [`--${prefix}list-group-color`]: color.secondaryDarker,
    [`--${prefix}list-group-hover-bg`]: color.baseLight,
    [`--${prefix}list-group-action-active-bg`]: color.baseLight,
    [`--${prefix}list-group-active-border-color`]: 'none',
    [`--${prefix}list-group-border-color`]: 'none',
    [`--${prefix}list-group-border-width`]: 0,
    [`--${prefix}list-group-disabled-color`]: color.disabledColor,
    [`--${prefix}list-group-disabled-bg`]: color.baseLighter,
    [`--${prefix}list-group-action-color`]: color.secondary,
    // navbar
    [`--${prefix}navbar-light-color`]: color.secondaryDarker,
    [`--${prefix}navbar-light-hover-color`]: color.secondary,
    [`--${prefix}navbar-light-active-color`]: color.secondary,
    [`--${prefix}navbar-light-disabled-color`]: color.disabledColor,
    [`--${prefix}navbar-light-toggler-border-color`]: color.secondaryDarker,
    [`--${prefix}navbar-light-brand-color`]: color.secondary,
    [`--${prefix}navbar-light-brand-hover-color`]: color.secondary,
    // offcanvas
    [`--${prefix}offcanvas-bg-color`]: color.baseLighter,
    [`--${prefix}offcanvas-padding-x`]: '2rem',
    // progress
    [`--${prefix}progress-bg`]: color.baseLight,
    // tabs
    [`--${prefix}nav-tabs-border-color`]: color.baseLight,
    [`--${prefix}nav-tabs-link-hover-border-color`]: color.baseLight,
    [`--${prefix}nav-tabs-link-active-color`]: color.secondaryDarker,
    [`--${prefix}nav-tabs-link-active-bg`]: color.baseLighter,
    [`--${prefix}nav-tabs-link-active-border-color`]: color.baseLight,
};
