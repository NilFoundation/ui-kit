# Changelog

## [[0.1.6](https://github.com/NilFoundation/react-components/compare/v0.1.5...v0.1.6)] - 2022-09-14
### Features
- Closable label component
- useHover hook added
- Href button prop added to render HTML anchor element

## [[0.1.5](https://github.com/NilFoundation/react-components/compare/v0.1.4...v0.1.5)] - 2022-09-13
### Fixes
- Can't resolve dynamic css imports from build

## [[0.1.4](https://github.com/NilFoundation/react-components/compare/v0.1.3...v0.1.4)] - 2022-09-12
### Features
- Transition component added
- Panel as React.forwardRef
- Media component added
- Collapse component added

### Refactor
- Toast component

## [[0.1.3](https://github.com/NilFoundation/react-components/compare/v0.1.2...v0.1.3)] - 2022-09-07
### Fixes
- Disabled default keyboard keys action in useKeyPress hook
- Endless selection on default selected option in Select component

## [[0.1.2](https://github.com/NilFoundation/react-components/compare/v0.1.1...v0.1.2)] - 2022-09-06
### Refactor
- Provide className prop to Navbar
- Set 'vertical' NavList prop to false by default

### Fixes
- Reexport ButtonGroup and Embed

## [[0.1.1](https://github.com/NilFoundation/react-components/compare/v0.1.0...v0.1.1)] - 2022-09-06
### Features
- Embed component added
- ButtonGroup component added
- Menu.Divider, Menu.Header added
- Panel.Title added

### Refactor
- DropdownButton default icon
- Remove Panel component context
- Dropdown dropup prop added

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
