<h1 align="center">=nil; Foundation user interface kit</h1>

<br />

UI components library to build React applications using `=nil;` pre-designed styles out of the box.

[![Build](https://github.com/NilFoundation/ui-kit/actions/workflows/build.yaml/badge.svg)](https://github.com/NilFoundation/ui-kit/actions/workflows/build.yaml)
[![Npm version](https://img.shields.io/npm/v/@nilfoundation/ui-kit?logo=npm)](https://www.npmjs.com/package/@nilfoundation/ui-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Minified size](https://img.shields.io/bundlephobia/min/@nilfoundation/ui-kit)](https://bundlephobia.com/package/@nilfoundation/ui-kit)

## Table of contents

- [Getting started](#getting-started)
- [Usage](#usage)
- [SSR](#ssr)
- [License](#license)

## Getting started

### npm

```bash
npm install @nilfoundation/ui-kit baseui styletron-engine-atomic styletron-react
```

### yarn

```bash
yarn add @nilfoundation/ui-kit baseui styletron-engine-atomic styletron-react
```

## Usage

```tsx
import { BaseProvider } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { createTheme, Button } from "@nilfoundation/ui-kit";

const engine = new Styletron();
const { theme } = createTheme(engine);

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>
        <Button>Button Label</Button>
      </BaseProvider>
    </StyletronProvider>
  );
}
```

## SSR

Use [this workaround](https://github.com/vercel/next.js/tree/canary/examples/with-styletron) to make Styletron, which this package is levelraging, work with SSR.

## License

[MIT](http://opensource.org/licenses/MIT)
