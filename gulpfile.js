var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
// var sass        = require('gulp-sass');
var sass = require('gulp-sass')(require('sass'));

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});