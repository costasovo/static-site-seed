var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var scsslint = require('gulp-scss-lint');
var prefix = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');

var gulpSettings = {
	path: "./"
};

gulp.task('watch', function() {
	gulp.watch(gulpSettings.path + 'css/**/*.scss', ['scsslint', 'sassAndPrefix']);
	gulp.watch(gulpSettings.path + 'js/coffee/**/*.coffee', ['coffee']);
	gutil.log(gutil.colors.cyan("=============================================="));
	gutil.log(gutil.colors.cyan(gutil.colors.bold("Hello there!")));
	gutil.log(gutil.colors.cyan("I'm watching sass and coffee files in " + gulpSettings.path + " for you."));
	gutil.log(gutil.colors.cyan(gutil.colors.bold("HAPPY CODING!!!")));
	gutil.log(gutil.colors.cyan("=============================================="));
});

gulp.task('webserver', function() {
  gulp.src(gulpSettings.path)
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: "index.html"
    }));
    gutil.log(gutil.colors.cyan("=============================================="));
	gutil.log(gutil.colors.cyan(gutil.colors.bold("Webserver on http://localhost:8000")));
});

gulp.task('sassAndPrefix', function () {
	gulp.src(gulpSettings.path + 'css/*.scss')
	.pipe(sass())
	.pipe(prefix('last 2 versions', '> 1%', 'ie 9', 'ios 7'))
	.pipe(gulp.dest(gulpSettings.path + 'css'));
});

gulp.task('scsslint', function () {
gulp.src(gulpSettings.path + 'css/**/*.scss')
	.pipe(scsslint({
		'config': '.scss-lint.yml'
	}));
});

gulp.task('autoprefixCss', function () {
	gulp.src(gulpSettings.path + 'css/*.css')
	.pipe(prefix('last 2 versions', '> 1%', 'ie 9', 'ios 7'))
	.pipe(gulp.dest(gulpSettings.path + 'css'));
});

gulp.task('coffee', function() {
	gulp.src(gulpSettings.path + 'js/coffee/**/*.coffee')
	.pipe(coffee({bare: true}).on('error', gutil.log))
	.pipe(gulp.dest(gulpSettings.path + 'js/'));
});


gulp.task('default', ['webserver', 'watch']);
