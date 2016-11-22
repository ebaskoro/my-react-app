/*
 * gulpfile.babel.js
 *
 */

import babelify from 'babelify';
import browserify from 'browserify';
import concat from 'gulp-concat';
import connect from 'gulp-connect';
import del from 'del';
import gulp from 'gulp';
import open from 'gulp-open';
import sass from 'gulp-sass';
import source from 'vinyl-source-stream';


const paths = {
  src: {
    html: 'src/*.html',
    image: 'src/images/*',
    font: [
      'node_modules/bootstrap/fonts/*',
      'node_modules/font-awesome/fonts/*'
    ],
    sass: 'src/sass/*.scss',
    css: [
      'build/css/imports.css',
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'node_modules/font-awesome/css/font-awesome.min.css',
      'build/css/index.css'
    ],
    js: 'src/**/*.js',
    main: 'src/main.js'
  },
  build: {
    html: 'build',
    image: 'build/images',
    font: 'build/fonts',
    css: 'build/css',
    js: 'build/js'
  },
  index: 'build/index.html'
};
const server = {
  port: 9999,
  url: 'http://localhost'
};

gulp.task('clean', () => {
  del([
    paths.build.html
  ]);
});

gulp.task('connect', () => {
  return connect.server({
    root: [
      paths.build.html
    ],
    port: server.port,
    base: server.url,
    livereload: true
  });
});

gulp.task('html', () => {
  gulp.src(paths.src.html)
    .pipe(gulp.dest(paths.build.html))
    .pipe(connect.reload());
});

gulp.task('image', () => {
  gulp.src(paths.src.image)
    .pipe(gulp.dest(paths.build.image));
});

gulp.task('sass', () => {
  return gulp.src(paths.src.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.build.css));
});

gulp.task('css', [
  'sass'
], () => {
  return gulp.src(paths.src.css)
    .pipe(concat('index.css'))
    .pipe(gulp.dest(paths.build.css))
    .pipe(connect.reload());
});

gulp.task('font', () => {
  gulp.src(paths.src.font)
    .pipe(gulp.dest(paths.build.font));
});

gulp.task('js', () => {
  return browserify(paths.src.main)
    .transform(babelify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('index.js'))
    .pipe(gulp.dest(paths.build.js))
    .pipe(connect.reload());
});

gulp.task('build', [
  'html',
  'image',
  'font',
  'css',
  'js'
]);

gulp.task('open', [
  'connect'
], () => {
  return gulp.src(paths.index)
    .pipe(open({
      uri: server.url + ":" + server.port + "/"
    }));
});

gulp.task('watch', () => {
  gulp.watch(paths.src.html, [
    'html'
  ]);
  gulp.watch(paths.src.sass, [
    'css'
  ]);
  gulp.watch(paths.src.js, [
    'js'
  ]);
});

gulp.task('default', [
  'clean',
  'build',
  'open',
  'watch'
]);
