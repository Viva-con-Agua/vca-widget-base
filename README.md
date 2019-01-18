# vca-widget-base

[![npm](https://img.shields.io/npm/v/vca-widget-user.svg)](https://www.npmjs.com/package/vca-widget-base) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Implements different visualizations for a user.

## Installation

```bash
npm install --save vca-widget-base
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import { VcAFrame, VcAColumn, VcABox, VcAInfoBox } from 'vca-widget-base'
import 'vca-widget-base/dist/vca-widget-base.css'

export default {
  name: 'App',
  components: { VcAFrame, VcAColumn, VcABox, VcAInfoBox }
}

```

Inside your template:
```xml
<template>
  <div id="app">
    <VcAFrame title="VcA Page">
        <VcAColumn size="90%">
            <VcABox title="VcA Box 1" :first="true">Test Box 1</VcABox>
            <VcABox title="VcA Box 2">Test Box 2</VcABox>
        </VcAColumn>
        <VcAColumn>
            <VcABox title="VcA Box 3" :first="true">Test Box 3</VcABox>
            <VcABox title="VcA Box 4">
                <VcAInfoBox>Test Box 4</VcAInfoBox>
            </VcABox>
        </VcAColumn>
    </VcAFrame>
  </div>
</template>
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="vca-widget-base/dist/vca-widget-base.css"></link>
<script src="vca-widget-base/dist/vca-widget-base.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/vca-widget-base/dist/vca-widget-base.css"></link>
<script src="https://unpkg.com/vca-widget-base"></script>
```

## Development

### Launch visual tests

```bash
npm run serve
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run lib
```


## Publishing

The `prepublish` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it 🚀
npm publish
```

## License
