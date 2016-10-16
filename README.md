#webkit-sass-material

##usage:
+ html:
```html
<meta name="viewport" content="initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
<meta name="format-detection" content="telephone=no">
<link rel="stylesheet" type="text/css" href="webkit-css-material/dist/style.css"/>
```
+ rem suppprt:
+ https://github.com/afeiship/resolution

## architecture:
> webkit-sass-material = (frame modules + sass modules + css modules)

### frame modules:
| Module name     | Module description     |
| :------------- | :------------- |
| webkit-sass-functions       | webkit-sass-functions       |
| webkit-sass-mixins       | webkit-sass-mixins       |
| webkit-sass-reset       | webkit-sass-reset       |
| webkit-sass-generators       | webkit-sass-generators       |
| webkit-sass-flex-grid       | webkit-sass-flex-grid       |
| webkit-cssui-short-name       | webkit-cssui-short-name       |


### sass modules:
| Module name     | Module description     |
| :------------- | :------------- |
| webkit-sassui-*       | webkit-sassui-*       |


### css modules:
| Module name     | Module description     |
| :------------- | :------------- |
| webkit-cssui-*       | webkit-cssui-*       |


##build:
+ cd webkit-css-material
+ npm install
+ gulp
