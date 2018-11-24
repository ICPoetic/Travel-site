var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create(),
mixins = require('postcss-mixins');


function styles() {
    return gulp.src('./app/assets/styles/style.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
    })    
    .pipe(gulp.dest('./app/temp/styles'));
    
    
 };


 gulp.task('watch', function() {

    browserSync.init({
       notify: false,
      server: {
          baseDir: "app"
      } 
    });

    watch('./app/index.html', function() {
        browserSync.reload();
        
    }); 
    
    



    watch('./app/assets/styles/**/*.css', function() {
        styles();
        cssInject();       
    });

});

   function cssInject() {            
    return gulp.src('app/temp/styles/style.css')
    .pipe(browserSync.stream());   
}