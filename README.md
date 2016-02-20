# gulp-superviewsjs
gulp-superviewsjs is a simple [gulp](https://github.com/wearefractal/gulp) plugin to use <a href="https://github.com/davidjamesstone/superviews.js">superviewjs</a>, a Template engine for google incremental-DOM.

[![NPM](https://nodei.co/npm/gulp-superviewsjs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-superviewsjs/)

####Install

'npm install gulp-superviewsjs --save-dev'

####Usage

```js
var superviewsjs = require('gulp-superviewsjs');//import the plugin
// your code here!!
pipe(superviewsjs())
//..pass to next pipe ;)
```

####A more "complex" example (with "<a href="https://www.npmjs.com/package/gulp-rename">gulp-rename</a>" gulp plugin):

```js
var rename = require("gulp-rename");

gulp.task('superviews2IDOM',function(){
    return gulp.src([
        "/**/template/*.html"
    ])
    .pipe(superviewsjs())
    .pipe(rename({
        extname: ".js"
    }))
    .pipe(gulp.dest(distPackage));
});
```

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
