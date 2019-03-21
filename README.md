# Example of TypeScript + tslint + webpack 4 + tree-shaking

## Prerequisites

1. Install [git](https://git-scm.com/)
1. Install [nodejs](https://nodejs.org/en/download/)

## Build The Project

1. Clone this repository
1. run `cd /path/to/this/folder`
1. run `npm install`
1. run `npm run build`

## Notes

- Tree-shaking only applies to production mode / `npm run build`
- You should not see the function of `sapi` & `kuda` in `bundle.js`
- [Webpack@4 Tree Shaking doesn't eliminate code between multiple entry points in same configuration object.](https://github.com/webpack/webpack/issues/4453)

[Webpack guides of tree-shaking](https://webpack.js.org/guides/tree-shaking/)
