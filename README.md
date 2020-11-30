# wsui
> webkit css material

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm i @jswork/wsui
```

## usage
+ import && config frame material:
```scss
//base config:
$base-font-family:'STHeiti', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
$base-font-size-h1-3:14px;
$base-font-size-h4-6:12px;

@import "dist/wsui";
```
## architecture
> wsui = (frame modules + sass ui modules)

### core modules
| Module name     | Module description |
| :-------------- | :----------------- |
| wsui-functions  | wsui-functions     |
| wsui-mixins     | wsui-mixins        |
| wsui-reset      | wsui-reset         |
| wsui-generators | wsui-generators    |
| wsui-flexbox    | wsui-flexbox       |


### other ui modules
| Module name | Module description |
| :---------- | :----------------- |
| wsui-*      | wsui-*             |


## license
Code released under [the MIT license](https://github.com/afeiship/wsui/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/wsui
[version-url]: https://npmjs.org/package/@jswork/wsui

[license-image]: https://img.shields.io/npm/l/@jswork/wsui
[license-url]: https://github.com/afeiship/wsui/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/wsui
[size-url]: https://github.com/afeiship/wsui/blob/master/dist/wsui.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/wsui
[download-url]: https://www.npmjs.com/package/@jswork/wsui
