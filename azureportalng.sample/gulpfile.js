//#region Properties

'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var del = require('del');
var merge = require('merge2');

var sass = require('gulp-sass');
var tsc = require('gulp-typescript');

//#endregion

//#region gulp runs

gulp.task('default', ['copy', 'build-old'], function () { });

gulp.task('clean', ['clean-script'], function () { });

gulp.task('copy', ['copy-apn', 'copy-angular', 'copy-ngdialog'], function () { });

gulp.task('build-old', ['build-tsc-old'], function () { });

gulp.task('build-dev', ['build-tsc-old', 'build-tsc-dev'], function () { });

gulp.task('watch', ['watch-sass'], function () { });

//#endregion

//#region clean

gulp.task('clean-script', function (callback) {
    del([
        './Scripts/angular',
        './Scripts/angular-resource',
        './Scripts/angular-mocks',
        './Scripts/ngdialog',

        './AzurePortalNg',
        './Content/images/avatar.jpg',
        './Styles/apn',
        './Scripts/apn',
        './Typings/browser/ambient/apn'
    ]);

    callback();
});

//#endregion

//#region apn

gulp.task("copy-apn", function () {
    gulp.src('../AzurePortalStyleNg.Ui.Web/dist/azureportalng/css/*')
        .pipe(gulp.dest('./Styles/apn'));

    gulp.src('../AzurePortalStyleNg.Ui.Web/dist/azureportalng/js/*')
        .pipe(gulp.dest('./Scripts/apn'));

    gulp.src('../AzurePortalStyleNg.Ui.Web/dist/azureportalng/typings/*')
        .pipe(gulp.dest('./Typings/browser/ambient/apn'));

    gulp.src('../AzurePortalStyleNg.Ui.Web/dist/azureportalng/portal/**/*')
        .pipe(gulp.dest('./AzurePortalNg/portal'));

    gulp.src('../AzurePortalStyleNg.Ui.Web/dist/azureportalng/Content/images/avatar.jpg')
    .pipe(gulp.dest('./Content/images'));
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

//#region ngdialog

gulp.task('copy-ngdialog', function () {
    gulp.src('./node_modules/ngdialog/dist/dialog.js')
        .pipe(gulp.dest('./Scripts/ngdialog'));
});

//#endregion

//#region tsc (typescript compile)

var tsOld = tsc.createProject('tsconfig.json', { typescript: require('typescript'), outFile: 'samples.js', module: 'commonjs', emitDecoratorMetadata: false });
var tsDevelop = tsc.createProject('tsconfig.json', { typescript: require('typescript') });
var tsRelease = tsc.createProject('tsconfig.json', { declaration: true, typescript: require('typescript') });

gulp.task('build-tsc-old', function () {
    var tsResult = tsOld.src()
        .pipe(tsc(tsOld));

    tsResult.js.pipe(gulp.dest('./Scripts'));
});

gulp.task('build-tsc-dev', function () {
    var tsResult = tsDevelop.src()
        .pipe(tsc(tsDevelop));

    tsResult.js.pipe(gulp.dest(''));
});

//#endregion
