var gulp=require('gulp');
var rename=require('gulp-rename');
var server=require('gulp-webserver-fast');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('css/*.sass')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('css/'))
});


gulp.task('server',['sass'],function () {
    gulp.watch('*.scss',['sass']);
    return gulp.src('./')
        .pipe(server({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});

gulp.task('default',['server']);
