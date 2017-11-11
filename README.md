# normalize-value

[![Greenkeeper badge](https://badges.greenkeeper.io/Kikobeats/normalize-value.svg)](https://greenkeeper.io/)

![Last version](https://img.shields.io/github/tag/Kikobeats/normalize-value.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/normalize-value/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/normalize-value)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/normalize-value.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/normalize-value)
[![Dependency status](https://img.shields.io/david/Kikobeats/normalize-value.svg?style=flat-square)](https://david-dm.org/Kikobeats/normalize-value)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/normalize-value.svg?style=flat-square)](https://david-dm.org/Kikobeats/normalize-value#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/normalize-value.svg?style=flat-square)](https://www.npmjs.org/package/normalize-value)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Normalizes a value according to the specified steps, using [feature scaling](https://en.m.wikipedia.org/wiki/Feature_scaling).

## Install

```bash
$ npm install normalize-value --save
```

## Usage

```js
const normalizeValue = require('normalize-value')

const normalizedValue = normalizeValue(500, [
  { value: 0, norm: 1 },
  { value: 1000, norm: 0 }
])

console.log(normalizeValue) // => 0.5
```

## License

**normalize-value** © [Kiko Beats](https://kikobeats.com), Released under the [MIT](https://github.com/Kikobeats/normalize-value/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/normalize-value/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [@Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
