#webkit-sass-material

##usage:
+ import && config frame material:
```sass
//base config:
$base-font-family:'STHeiti', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
$base-font-size-h1-3:14px;
$base-font-size-h4-6:12px;

//grid:
$grid-padding-width:              10px !default;
$grid-responsive-sm-break:        567px !default;  // smaller than landscape phone
$grid-responsive-md-break:        767px !default;  // smaller than portrait tablet
$grid-responsive-lg-break:        1023px !default; // smaller than landscape tablet

//initial your generators:

@import "dist/webkit-sass-material";
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
