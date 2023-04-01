# Changelog

## [[1.0.1](https://github.com/NilFoundation/react-components/compare/v1.0.0-beta.1...v1.0.1)] - 2023-04-01

### Features

- Add assets

## [[1.0.0-beta.1](https://github.com/NilFoundation/react-components/compare/v1.0.0-beta.0...v1.0.0-beta.1)] - 2023-02-03

### Features

- Add ThemeProvider react component

## [[1.0.0-beta.0](https://github.com/NilFoundation/react-components/compare/v0.8.2...v1.0.0-beta.0)] - 2023-01-31

### Breaking changes

- React components are removed. Consider to use [react-bootstrap](hhttps://react-bootstrap.github.io/) or any other react components package to continue using this ui-lit with react.

## [[0.8.2](https://github.com/NilFoundation/react-components/compare/v0.8.1...v0.8.2)] - 2022-11-19

### Fixes

- Downgrade tscompiler target to es2016

## [[0.8.1](https://github.com/NilFoundation/react-components/compare/v0.8.0...v0.8.1)] - 2022-11-19

### Fixes

- Fix form hint html tag and override text color

## [[0.8.0](https://github.com/NilFoundation/react-components/compare/v0.7.1...v0.8.0)] - 2022-11-15

### Breaking changes

- FloatingLabel children are render function with props getter

### Refactor

- Update typescript config
- Add useCallback to useKeyPress hook

## [[0.7.1](https://github.com/NilFoundation/react-components/compare/v0.7.0...v0.7.1)] - 2022-11-07

### Fixes

- Don't render Toast content element with undefined children

## [[0.7.0](https://github.com/NilFoundation/react-components/compare/v0.6.7...v0.7.0)] - 2022-10-31

### Breaking changes

- Remove Link component

### Features

- **target** Label prop

## [[0.6.7](https://github.com/NilFoundation/react-components/compare/v0.6.6...v0.6.7)] - 2022-10-27

### Features

- **position** Media prop

### Refactor

- **align** ---> **verticalAlign**

## [[0.6.6](https://github.com/NilFoundation/react-components/compare/v0.6.5...v0.6.6)] - 2022-10-22

### Features

- **useBreakpoints** hook

## [[0.6.5](https://github.com/NilFoundation/react-components/compare/v0.6.4...v0.6.5)] - 2022-10-19

### Features

- **selector** Portal prop

### Fixes

- Same Portal content during SSR and hydration (return null on first render)

## [[0.6.4](https://github.com/NilFoundation/react-components/compare/v0.6.3...v0.6.4)] - 2022-10-17

### Features

- **children** NavItem and BreadcrumbsItem prop not required

### Fixes

- Portal SSR support

## [[0.6.3](https://github.com/NilFoundation/react-components/compare/v0.6.2...v0.6.3)] - 2022-10-17

### Features

- **renderLink** navItem prop
- **renderLink** breadcrumbsItem prop

## [[0.6.2](https://github.com/NilFoundation/react-components/compare/v0.6.1...v0.6.2)] - 2022-10-14

### Features

- **align** DropdownMenu prop

## [[0.6.1](https://github.com/NilFoundation/react-components/compare/v0.6.0...v0.6.1)] - 2022-10-13

### Features

- **onClick** NavItem prop

## [[0.6.0](https://github.com/NilFoundation/react-components/compare/v0.5.4...v0.6.0)] - 2022-10-12

### Breaking changes

- Remove Transition component

### Features

- **displayIcon** Dropdown prop
- Notification container

## [[0.5.4](https://github.com/NilFoundation/react-components/compare/v0.5.3...v0.5.4)] - 2022-10-09

### Features

- **Grow** Spinner prop

### Fixes

- Spinner minor issues
- Dropdown menu unexpected close on interacting menu with keyboard
- Disabled ListGroup item href issue

## [[0.5.3](https://github.com/NilFoundation/react-components/compare/v0.5.2...v0.5.3)] - 2022-10-06

### Features

- ListGroup component styling
- ErrorBoundary component
- ListGroup forwardRef

## [[0.5.2](https://github.com/NilFoundation/react-components/compare/v0.5.1...v0.5.2)] - 2022-10-05

### Features

- Navbar component styling

## [[0.5.1](https://github.com/NilFoundation/react-components/compare/v0.5.0...v0.5.1)] - 2022-10-05

### Features

- Select customizable icons
- Include variables.scss into build to provide color schema usage

### Fixes

- Menu is always scrolling into view when opens

## [[0.5.0](https://github.com/NilFoundation/react-components/compare/v0.4.4...v0.5.0)] - 2022-10-05

### Breaking changes

- Include all bootstrap styles and style overrides in package
- Download Roboto font by default

## [[0.4.4](https://github.com/NilFoundation/react-components/compare/v0.4.3...v0.4.4)] - 2022-10-04

### Fixes

- Menu autoScroll into view behaviour
- Select defaultSelected error

## [[0.4.3](https://github.com/NilFoundation/react-components/compare/v0.4.2...v0.4.3)] - 2022-09-29

### Features

- ListGroup component

## [[0.4.2](https://github.com/NilFoundation/react-components/compare/v0.4.1...v0.4.2)] - 2022-09-28

### Fixes

- SSR useAutoScrollIntoView pilyfill() error

## [[0.4.1](https://github.com/NilFoundation/react-components/compare/v0.4.0...v0.4.1)] - 2022-09-28

### Features

- UseAutoScrollIntoView hook
- AutoScrollIntoView Menu component
- Export helpers functions

### Fixes

- SSR support useOnScreen hook
- Don't close Menu on scroll, when it's not fully visible

## [[0.4.0](https://github.com/NilFoundation/react-components/compare/v0.3.2...v0.4.0)] - 2022-09-27

### Breaking changes

- Nav instead of NavList

### Features

- Add WAI-ARIA **role** attribute to Grid components
- Menu keyboard navigation

### Fixes

- Layout sticky header z-index is lower than content's
- Anchor extra styling

## [[0.3.2](https://github.com/NilFoundation/react-components/compare/v0.3.1...v0.3.2)] - 2022-09-23

### Features

- Anchor component added

## [[0.3.1](https://github.com/NilFoundation/react-components/compare/v0.3.0...v0.3.1)] - 2022-09-23

### Refactor

- Export from Form and FloatingLabel

## [[0.3.0](https://github.com/NilFoundation/react-components/compare/v0.2.0...v0.3.0)] - 2022-09-23

### Breaking changes

- Make Image **alt** prop required
- UseEventListener now listens only to global (document) events

### Features

- Form component
- FloatingLabel component
- Broken images styling
- Select **ref** prop
- Select dropdown with transition
- UseOnScreen hook
- UseCombinedRef hook

## [[0.2.0](https://github.com/NilFoundation/react-components/compare/v0.1.6...v0.2.0)] - 2022-09-20

### Breaking changes

- Layout
- Placeholder
- Breadcrumbs
- Image, LazyImage
- Rounded and outlined buttons no longer exist
- Remove PageContainer component

### Features

- Add 'as' prop to Grid elements
- Add lint:editorconfig script

### Refactor

- Specify bootstrap version as 3.4.\*

### Fixes

- Grid breakpoints
- Grid \*-offset props

## [[0.1.6](https://github.com/NilFoundation/react-components/compare/v0.1.5...v0.1.6)] - 2022-09-14

### Features

- Closable label component
- useHover hook added
- Href button prop added to render HTML anchor element
- Sidebar component removed

### Refactor

- Layout markup and API

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
