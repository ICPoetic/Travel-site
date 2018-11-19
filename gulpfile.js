var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('default', function() {
   console.log('Hooray - you created a gulp task'); 
});

function html() {
    console.log('Imagine something useful being done to html here.'); 
 }

function styles() {
    return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
 }

 gulp.task('watch', function() {


    watch('./app/index.html', function() {
        html();
    });


    watch('./app/assets/styles/**/*.css', function() {
        styles();
    });

    
    
 });

