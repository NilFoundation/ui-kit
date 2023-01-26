# =nil; Foundation ui-kit
Ui-kit system, based on [Bootstrap 5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

[![Test](https://github.com/NilFoundation/react-components/actions/workflows/test.yaml/badge.svg)](https://github.com/NilFoundation/react-components/actions/workflows/test.yaml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Table of contents
  - [Getting started](#quick-start)
  - [Scss](#scss)
  - [Typescript and javascript](#typescript-and-javascript)
  - [Changelog](#changelog)
  - [License](#license)

## Quick Start

- Configure npm registry:

```
@nilfoundation:registry=https://npm.pkg.github.com/
```

- Install:

```bash
$ npm i @nilfoundation/ui-kit
# or
$ yarn add @nilfoundation/ui-kit
```

## Scss

We provide set of scss variables and styles. Consider to include this code in any of your scss files, then import it into your project.

```scss
@import '~@nilfoundation/ui-kit/build/scss/_all.scss';
```

If you don't need all the styles, you can import only required.
```scss
@import '~@nilfoundation/ui-kit/build/scss/components/_alert.scss';
@import '~@nilfoundation/ui-kit/build/scss/_theme.scss';
```

### Bootstrap, Icons and fonts
This package includes only bootstrap style overrides. We assume, that you already have bootstrap in your project, otherwise importing scss files will make no sence. For more information how to override bootstrap default styles using sass, see [official docs](https://getbootstrap.com/docs/5.3/customize/sass/).

### Modals
Consider not to use modals and popups. This package does not include any overrides for them. 

Icons and fonts are also not included in this ui-kit to provide more flexibility in setup. Consider to use Roboto/Roboto mono fonts for plain text and Menlo/Corier/monospace for **=nil; Foundation** logo to follow our styleguide.

## Typescript and javascript
To provide css-in-js support, we also export the color scheme object, which contains all styleguide colors.
```ts
import colors from '@nilfoundation/ui-kit';
```

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](http://opensource.org/licenses/MIT)
