# Changelog

## [[0.1.0](https://github.com/NilFoundation/react-components/compare/v0.0.5...v0.1.0)] - 2022-09-04
### Features
- Update InputGroup API (InputGroup.Addon, InputGroup.Buttons)
- Use 'i' element as icon default element
- Use glyphicons as default icon set
- Remove Size.xs from allowed form-control sizes
- Add Select 'clearIcon' prop
- Remove dropdown internal context id and add aria-labeledby prop to DropdownMenu

### Refactor
- Toggle select menu on input click

### Fixes
- Dropdown disabled item appearance

## [[0.0.5](https://github.com/NilFoundation/react-components/compare/v0.0.4...v0.0.5)] - 2022-08-31
### Features
- Add CloseButton component
- Breadcrumbs, Dropdown, Alert stories

### Refactor
- Rename Badge to Label
- Remove Icon size prop

## [[0.0.4](https://github.com/NilFoundation/react-components/compare/v0.0.3...v0.0.4)] - 2022-08-30
### Features
- Badge component added

### Fixes
- Don't include stories in rollup build

## [[0.0.3](https://github.com/NilFoundation/react-components/compare/v0.0.2...v0.0.3)] - 2022-08-29
### Features
- Storybook added
- Jest added
- LazyImage added

### Refactor
- Select
- Dropdown menu
- useKeyPress generic
- useEventListener typings

### Fixes
- Select clear icon display

## [0.0.2] - 2022-08-25
### Features
- Dropdown menu item component
- Export SelectOption alongside with Select to use like HOC
- Linter and formatter
- Precommit hook

### Refactor
- Add footer to Layout component as props
- Delete Navbar.Brand component

### Fixes
- onClickOutside hook
