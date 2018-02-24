var gulp = require ('gulp');
var fs = require("fs");
var {promisify} = require("util");
const readFile = promisify(fs.readFile);

gulp.task('default', ['copy', 'less', 'watch'], function() {
    console.log("Hello");
    return;
});

gulp.task("copy", function() {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('docs/'));
    gulp.src('src/img/*')
        .pipe(gulp.dest('docs/img'));
    gulp.src('src/fonts/*')
        .pipe(gulp.dest('docs/fonts'));
});

var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
    return gulp.src('src/style/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('docs/style'));
});

gulp.task('watch', function() {
    gulp.watch('src/style/**/*.less', ['less']);
    gulp.watch('src/**/*.html')
});