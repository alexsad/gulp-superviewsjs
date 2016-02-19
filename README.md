# gulp-superviewsjs
-A GULP plugin to:
plugin GULP to convert template superview to Incremental DOM

how to install:

npm install gulp-superviewsjs --save-dev

--how to use in Gulpfile.js

var superviewsjs = require('gulp-superviewsjs');
.. your code here!!
pipe(superviewsjs())
..pass to next pipe ;)

A more complex exemple (with rename gulp plugin or any other rssrr):

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