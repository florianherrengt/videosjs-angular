gulp = require('gulp')
coffee = require('gulp-coffee')
gutil = require('gulp-util')
concat = require('gulp-concat')
clean = require('gulp-clean')
runSequence = require('gulp-run-sequence')
sourcemaps = require('gulp-sourcemaps')
ngAnnotate = require('gulp-ng-annotate')
templateCache = require('gulp-angular-templatecache')

paths = {
    scripts: 'client/scripts/**/*.coffee',
    index: 'client/index.html',
    templates: 'client/templates/*.tpl.html'
}

gulp.task 'clean:public', ->
    gulp.src('server/public/', {read: false})
        .pipe(clean())

gulp.task 'compile:coffee', ->
    gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(coffee({bare: true}))
        .on('error', gutil.log)
        .pipe(ngAnnotate())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('server/public/scripts/'))

gulp.task 'compile:lib', ->
    gulp.src([
            'client/bower_components/angular/angular.min.js'
            'client/bower_components/angular-ui-router/release/angular-ui-router.min.js'
            'client/bower_components/angular-sanitize/angular-sanitize.min.js'
        ])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest('server/public/scripts/'))

    # gulp.src([
    #     ])
    #     .pipe(concat('lib.css'))
    #     .pipe(gulp.dest('server/public/css'))

gulp.task 'copy:index', ->
    gulp.src paths.index
        .pipe(gulp.dest('server/public/'))

gulp.task 'compile:templates', ->
    gulp.src paths.templates
        .pipe(templateCache(
            module: 'angularvideo'
        ))
        .pipe(gulp.dest('server/public/scripts'))

gulp.task 'watch', ->
    gulp.watch paths.scripts, ['compile:coffee']
    gulp.watch paths.index, ['copy:index']
    gulp.watch paths.templates, ['compile:templates']

gulp.task 'default', ->
    runSequence(
        'clean:public',
        [
            'compile:coffee'
            'compile:lib'
            'copy:index',
            'compile:templates'
        ],
        'watch'
    )
