//#region Properties

'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var del = require('del');
var merge = require('merge2');

//#endregion

//#region gulp runs

gulp.task('clean', ['clean-script', 'clean-dist'], function () { });

gulp.task('copy', ['copy-angular', 'copy-ng-dialog'], function () { });

gulp.task('build-old', ['build-apn'], function () { });

//#endregion

//#region clean

gulp.task('clean-script', function () {
    del([
        './scripts'
    ]);
});

gulp.task('clean-dist', function () {
    del([
        './dist'
    ]);
});

//#endregion

//#region angular

gulp.task('copy-angular', function () {
    gulp.src('./node_modules/angular/angular.js')
        .pipe(gulp.dest('./scripts/angular'));

    gulp.src('./node_modules/angular-resource/angular-resource.min.js')
        .pipe(gulp.dest('./scripts/angular-resource'));

    gulp.src('./node_modules/angular-mocks/angular-mocks.js')
        .pipe(gulp.dest('./scripts/angular-mocks'));
});

//#endregion

//#region apn

gulp.task('build-apn', function () {
    gulp.src(['./azureportalng/images/avatar.jpg'])
        .pipe(gulp.dest('./dist/images'));

    gulp.src('./azureportalng/css/apn.css')
        .pipe(gulp.dest('./dist/css'));

    gulp.src(['./azureportalng/directives/**/*.html'])
        .pipe(gulp.dest('./dist/directives'));
});

//#endregion