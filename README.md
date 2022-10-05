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

## Color scheme

- We provide set of scss color variables. Consider to include this code in any of your scss files.

```scss
@import '~@nilfoundation/react-components/build/variables';
```

## Bootstrap, Icons and fonts

This package already includes
- [Bootstrap 3.4.1](https://getbootstrap.com/docs/3.4/getting-started/#download)
- [Roboto Font](https://fonts.google.com/specimen/Roboto)

We use [Glyphicons](https://getbootstrap.com/docs/3.3/components/#glyphicons), delivered by default with Bootstrap 3. Feel free to use in your project any other icon sets with [Icon](./src/components/Icon/Icon.tsx) component.

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT](http://opensource.org/licenses/MIT)
