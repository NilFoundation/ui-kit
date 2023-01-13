# React components library based on Bootstrap 3

[![Test](https://github.com/NilFoundation/react-components/actions/workflows/test.yaml/badge.svg)](https://github.com/NilFoundation/react-components/actions/workflows/test.yaml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Quick Start

- Configure npm registry:

```
@nilfoundation:registry=https://npm.pkg.github.com/
```

- Install:

```bash
$ npm i @nilfoundation/react-components
# or
$ yarn add @nilfoundation/react-components
```

## Scss

We provide set of scss variables and styles. Consider to include this code in any of your scss files, and then import this into your project.

```scss
@import '~@nilfoundation/react-components/build/styles/_all.scss';
```

If you don't need all the styles, you can import only required
```scss
@import '~@nilfoundation/react-components/build/styles/components/_alert.scss';
@import '~@nilfoundation/react-components/build/styles/_theme.scss';
```

### Bootstrap, Icons and fonts
This package includes only bootstrap style overrides. We assume, that you already have bootstrap in your project. For more information how to override bootstrap styles, visit [official docs](https://getbootstrap.com/docs/5.3/customize/sass/).

Icons and fonts are also not included here to provide more flexibility in setup. Consider to use Roboto and Roboto mono fonts to follow our styleguide.

## Typescript and javascript.
To provide css-in-js support, we also export the color scheme object, which contains all styleguide colors.
```ts
import colors from '@nilfoundation/TODO';
```

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](http://opensource.org/licenses/MIT)
