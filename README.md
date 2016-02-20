# gulp-superviewsjs
A simple gulp plugin to use <a href="https://github.com/davidjamesstone/superviews.js">superviewjs</a>, a Template engine for google incremental-DOM.

####how to install:

'npm install gulp-superviewsjs --save-dev'

####how to use in Gulpfile.js

```js
var superviewsjs = require('gulp-superviewsjs');//import the plugin
// your code here!!
pipe(superviewsjs())
//..pass to next pipe ;)
```

####A more "complex" exemple (with "rename" gulp plugin):

```js
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
