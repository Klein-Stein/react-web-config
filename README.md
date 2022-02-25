@kleinstein/react-web-config
=========
[![npm version](https://img.shields.io/badge/npm_version-1.0.0-brightgreen)](https://www.npmjs.com/package/@kleinstein/react-web-config)
[![license](https://img.shields.io/badge/license-MIT-brightgreen)](LICENSE.txt)

## Overview

An extension to add a web support for [react-native-config](https://github.com/luggit/react-native-config) package. This package is based on [react-web-config](https://github.com/tanhauhau/react-web-config) from [tanhauhau](https://github.com/tanhauhau).

## Installation

### Step 1:

Install `react-native-config` according to [its manual](https://github.com/luggit/react-native-config).

### Step 2:

Install `@kleinstein/react-web-config`:  

- NPM: `npm install @kleinstein/react-web-config`
- Or Yarn: `yarn add @kleinstein/react-web-config`

### Step 3:

Add next lines to `webpack.config.js`:  

```diff
  const path = require('path');

  const webpack = require('webpack');
+ const webConfig = require('@kleinstein/react-web-config/WebConfig');
  ...
+ // Replace '.env' by actual filename
+ const envPath = path.resolve(__dirname, '.env');
  ...
  module.exports = {
    ...
    resolve: {
      ...
      alias: {
        ...
+       'react-native-config': '@kleinstein/react-web-config',
      },
      ...
    },
    ...
    plugins: [
      ...
      new webpack.DefinePlugin({
        ...
+       __REACT_WEB_CONFIG__: JSON.stringify(webConfig(envPath)),
      }),
      ...
    ],
    ...
  };

```

## Usage

**.env**:
```
HELLO_WORLD="Hello, World!"
```

**In code:**
```
import Config from 'react-native-config'
...
Config.HELLO_WORLD
```

## Licensing
Project is licensed under the MIT license. See [LICENSE](LICENSE.txt) for the full license text.