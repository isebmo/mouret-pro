// Include gulp
var gulp = require('gulp');
// Plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var svgmin = require('gulp-svgmin');
var header = require('gulp-header');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var cache = require('gulp-cache');
var runsequence = require('run-sequence');
var del = require('del');
var zip = require('gulp-zip');
var bump = require('gulp-bump');
var pkg = require('./package.json');
var banner = [
    '/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @homepage <%= pkg.homepage %>',
    ' * @copyright ' + (new Date()).getFullYear() + ' <%= pkg.author.name %> ' ,
    ' * @license <%= pkg.license %>',
    ' */',
    '\n'
].join('\n');
var files = {
    lint: ['gulpfile.js',
        'package.json'
    ],
    sass: ['source/sass/**/style.scss'],
    sassall: ['source/sass/**/*.scss'],
    css:  [],
    js:   [],
    images:[],
    svgs:  [],
    clean: [
    ]
};
// Compile Our Sass
gulp.task('compileSass', function() {
    return gulp.src(files.sass)
        .pipe(sass({style: 'expanded', quiet: true, cacheLocation: '.sass-cache'}))
        .pipe(sass())
        .pipe(autoprefixer('last 1 version'))
        .pipe(minifycss({keepSpecialComments: 0}))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('source/css'));
});
gulp.task('css', function() {
    runsequence(
        'compileSass');
});
// Concatenate & Minify JS
gulp.task('js', function() {
    return gulp.src(files.js)
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(header(banner, { pkg : pkg }))
        .pipe(gulp.dest('source/js'));
});
gulp.task('concatJs', function() {
    return gulp.src(files.js)
        .pipe(concat('concat_scripts.js'))
        .pipe(gulp.dest('source/js'))
        .pipe(header(banner, { pkg : pkg }))
        .pipe(gulp.dest('source/js'));
});
// Images
gulp.task('imgmin', function() {
    return gulp.src(files.images)
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('source/images'));
});
// Images
gulp.task('svgmin', function() {
    return gulp.src(files.svgs)
        .pipe(cache(svgmin()))
        .pipe(gulp.dest('source/images'));
});
// Build
gulp.task('build', function() {
    return gulp.start(['compileSass','concatJs']);
});
// Watch Files For Changes
gulp.task('watch', ['default'], function() {
    gulp.watch(files.lint, ['js']);
    gulp.watch(files.sassall, ['css']);
});
// Clean
gulp.task('clean', function() {
    files.clean.map(function (x) {
        console.log("Deleting "+ x);
    });
    return del(files.clean);
});
// Default Task
gulp.task('default', function() {
    gulp.start('lint', 'css', 'js', 'imgmin', 'svgmin');
});
gulp.task('zip', ['build'], function () {
    return gulp.src(['./**', '!node_modules/**'])
        .pipe(zip('hexo-theme-mouret.zip'))
        .pipe(gulp.dest('.'));
});
gulp.task('bump', function(){
    gulp.src('./package.json')
        .pipe(bump())
        .pipe(gulp.dest('./'));
});