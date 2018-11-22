var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

function html() {
    console.log('Imagine something useful being done to html here.'); 
 }

function styles() {
    return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
 }

 gulp.task('watch', function(done) {

    watch('./app/index.html', function() {
        html();
    });


    watch('./app/assets/styles/**/*.css', function() {
        styles();
    });

    done();

});

    
    
 

