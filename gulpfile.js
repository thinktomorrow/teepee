var gulp = require('gulp'),
    rev = require('gulp-rev'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefix = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    imagemin = require('gulp-imagemin'),
    runSequence = require('run-sequence'),
    del = require('del');

// Config settings
var config = {
    proxy: 'localhost:8888',
    bowerDir: './bower_components',
    baseDir: './',
    sassDir: './resources/sass',
    targetCSSDir: './assets/css',
    sourceSassFilename: 'teepee.scss',

    jsDir: './resources/js',
    targetJSDir: './assets/js',
    targetJSFilename: 'teepee.js',
    targetJSVendorFilename: 'vendor.js'
};

gulp.task('sass', function() {
 return gulp.src(config.sassDir + '/' + config.sourceSassFilename)
     .pipe(sourcemaps.init())
     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
     .pipe(autoprefix({cascade:false, browsers: ['> 1%']}))
     .pipe(sourcemaps.write('.'))
     .pipe(gulp.dest(config.targetCSSDir))
     .pipe(reload({ stream:true }));
});

gulp.task('js',function(){
    return gulp.src(config.jsDir + '/**/*.js')
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(concat(config.targetJSFilename))
        .pipe(gulp.dest(config.targetJSDir));
});


gulp.task('vendor-js',function(){
    return gulp.src([
        config.bowerDir+'/jquery/dist/jquery.js',
        config.bowerDir+'/foundation-sites/dist/foundation.js',
    ])
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(concat(config.targetJSVendorFilename))
    .pipe(gulp.dest(config.targetJSDir));
});

gulp.task('run:versioning', function() {

    // First copy the images because they are relative to the css files
    gulp.src(['public/assets/img/**/*']).pipe(gulp.dest('public/dist/assets/img'));
    gulp.src(['public/assets/fonts/**/*']).pipe(gulp.dest('public/dist/assets/fonts'));

    return gulp.src(['public/assets/**/*.css', 'public/assets/**/*.css.map', 'public/assets/**/*.js'],{base: 'public'})
        .pipe(rev())
        .pipe(gulp.dest('public/dist'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('public/dist'));
});

gulp.task('clear:versioning', function() {

    return del(['public/dist']);

});

gulp.task('rev', function() {

    return runSequence('clear:versioning','run:versioning');
});

gulp.task('serve',function(){
    browserSync({
        proxy: config.proxy
    });

    gulp.watch(config.sassDir+'/**/*.scss',function(callback){
        runSequence('sass','rev');
    },browserSync.reload());
});

gulp.task('watch', function(){
 gulp.watch(config.sassDir + '/**/*.scss', function(callback){
     runSequence('sass');
 });
});

gulp.task('vendor', function(callback){
    runSequence(['vendor-sass','vendor-js'],'rev',callback);
});
gulp.task('default', function(callback){
    runSequence(['sass','js'],'rev');
});

/*
 * ---------------------------
 * COMPRESS YOUR IMAGES
 * ---------------------------
 *
 * add --verbose as flag to your command to see compression of each image
 */
gulp.task('optimize:images',function(){
    gulp.src('./public/assets/img/**/*.{jpg,jpeg,png,gif}')
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            optimizationLevel: 4
        }))
        .pipe(gulp.dest('./resources/.cache/img/'))
        .pipe(gulp.dest('./public/assets/img/'));
});
