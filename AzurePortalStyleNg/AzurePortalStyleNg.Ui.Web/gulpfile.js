//#region Properties

'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

var del = require('del');
var merge = require('merge2');

var sass = require('gulp-sass');
var tsc = require('gulp-typescript');

//#endregion

//#region gulp runs

gulp.task('default', ['copy', 'build-old'], function () { });

gulp.task('clean', ['clean-script', 'clean-dist'], function () { });

gulp.task('copy', ['copy-angular', 'copy-ng-dialog'], function () { });

gulp.task('build-old', ['build-apn', 'build-tsc-old', 'build-sass'], function () { });

gulp.task('build-dev', ['build-tsc-dev', 'build-sass'], function () { });

//gulp.task('build-release', ['build-tsc-old', 'build-tsc-release'], function () { });

gulp.task('watch', ['watch-sass'], function () { });

//#endregion

//#region clean

gulp.task('clean-script', function (callback) {
    del([
        './Scripts/angular',
        './Scripts/angular-resource',
        './Scripts/angular-mocks',
        './Scripts/ng-dialog',

        './Scripts/samples.js'
    ]);
    callback();
});

gulp.task('clean-dist', function (callback) {
    del([
        './dist'
    ]);
    callback();
});

//#endregion

//#region angular

gulp.task('copy-angular', function () {
    gulp.src('./node_modules/angular/angular.js')
        .pipe(gulp.dest('./Scripts/angular'));

    gulp.src('./node_modules/angular-resource/angular-resource.min.js')
        .pipe(gulp.dest('./Scripts/angular-resource'));

    gulp.src('./node_modules/angular-mocks/angular-mocks.js')
        .pipe(gulp.dest('./Scripts/angular-mocks'));
});

//#endregion

//#region ng-dialog

gulp.task('copy-ng-dialog', function () {
    gulp.src('./node_modules/ng-dialog/css/ngDialog.min.css')
        .pipe(gulp.dest('./dist/azureportalng/css'));

    gulp.src('./node_modules/ng-dialog/css/ngDialog-theme-default.css')
        .pipe(gulp.dest('./dist/azureportalng/css'));

    gulp.src('./node_modules/ng-dialog/js/ngDialog.min.js')
        .pipe(gulp.dest('./dist/azureportalng/js'));
});

//#endregion

//#region sass

gulp.task('build-sass', function () {
    return gulp.src('./Content/azureportalstyleng.scss')
        //.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('apn.css'))
        .pipe(gulp.dest('./dist/azureportalng/css'));
});

gulp.task('watch-sass', function () {
    gulp.watch('./Content/azureportalstyleng.scss', ['sass']);
});

//#endregion

//#region tsc (typescript compile)

var tsOld = tsc.createProject('tsconfig.json', { typescript: require('typescript'), outFile: 'apn.js', declaration: true });
var tsDevelop = tsc.createProject('tsconfig.json', { typescript: require('typescript') });
var tsRelease = tsc.createProject('tsconfig.json', { declaration: true, typescript: require('typescript') });

gulp.task('build-tsc-old', function () {
    var tsResult = tsOld.src()
        .pipe(tsc(tsOld));
    return merge([
        tsResult.dts.pipe(gulp.dest('./dist/azureportalng/typings')),
        tsResult.js.pipe(gulp.dest('./dist/azureportalng/js'))
    ]);
});

gulp.task('build-tsc-dev', function () {
    var tsResult = tsDevelop.src()
        .pipe(tsc(tsDevelop));

    return tsResult.js.pipe(gulp.dest(''));
});

gulp.task('build-tsc-release', function () {
    var tsResult = tsRelease.src()
        .pipe(tsc(tsRelease));
    return merge([
        tsResult.dts.pipe(gulp.dest('./dist/azureportalng/typings')),
        tsResult.js.pipe(gulp.dest('./dist/azureportalng/js'))
    ]);
});

//#endregion

//#region apn

gulp.task('build-apn', function () {
    gulp.src(['./Content/images/avatar.jpg'])
        .pipe(gulp.dest('./dist/azureportalng/Content/images'));

    gulp.src(['./AzurePortalNg/portal/!directives/**/*.html'])
        .pipe(gulp.dest('./dist/azureportalng/portal/!directives'));
});

//#endregion