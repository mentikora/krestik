/**
 * @file
 *
 * Use 'npm start' for markup development.
 * Use 'npm run build' for build markup.
 * Use 'npm run watch:styles' for styling.
 * Use 'npm run build:styles' for scss compilation.
 */

'use strict';

const autoprefixer  = require('autoprefixer');
const browserSync   = require('browser-sync');
const del           = require('del');
const gulp          = require('gulp');
const environments  = require('gulp-environments');
const handlebars    = require('gulp-hb');
const postcss       = require('gulp-postcss');
const sass          = require('gulp-sass');
const sourcemaps    = require('gulp-sourcemaps');

const development = environments.development;
const production = environments.production;

// Task: HTML. =================================================================
gulp.task('html', () =>
  gulp.src('hbs/*.{html,hbs}')
  .pipe(handlebars({
    partials: 'hbs/partials/**/*.hbs',
    helpers: 'hbs/helpers/*.js',
    data: 'hbs/data/**/*.{js,json}'
  }))
  .pipe(gulp.dest('.'))
);

// Task: styles. ===============================================================
gulp.task('styles', () =>
gulp.src('scss/*.scss')
  .pipe(development(sourcemaps.init()))
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ]))
  .pipe(development(sourcemaps.write()))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.stream())
);

// Task: Clean. ================================================================
gulp.task('clean:html', () => del('./*.html'));
gulp.task('clean:css', () => del('css'));

// Task: watch. ================================================================
gulp.task('watch', ['default'], () => {
  browserSync.init({
    files: [
      './**/*.html',
      'js/**/*.js'
    ],
    server: '.'
  });
  gulp.watch('scss/**/*.scss', ['styles']);
  gulp.watch('hbs/**/*.{html,hbs,js,json}', ['html']);
});

// Task: watch for styles. =====================================================
gulp.task('watch:styles', ['styles'], () => {
  gulp.watch('scss/**/*.scss', ['styles']);
});

// Task: default. ==============================================================
gulp.task('default', ['html', 'styles']);
