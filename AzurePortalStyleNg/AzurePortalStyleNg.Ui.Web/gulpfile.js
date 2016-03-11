//#region Setup

var gulp = require('gulp');
var clean = require('gulp-clean');
var tsc = require('gulp-typescript');
var merge = require('merge2');

//#endregion

//#region default

gulp.task('default', ['angular-copy'], function () {
});

//#endregion

//#region angular

gulp.task('angular-copy', ['angular-clean'], function () {
    gulp.src('./node_modules/angular/angular.js')
        .pipe(gulp.dest('./Scripts/angular'));

    gulp.src('./node_modules/angular-resource/angular-resource.min.js')
        .pipe(gulp.dest('./Scripts/angular-resource'));

    gulp.src('./node_modules/angular-mocks/angular-mocks.js')
        .pipe(gulp.dest('./Scripts/angular-mocks'));
});

gulp.task('angular-clean', function () {
    gulp.src('./Scripts/angular', { read: false }).pipe(clean());
    gulp.src('./Scripts/angular-resource', { read: false }).pipe(clean())
    return gulp.src('./Scripts/angular-mocks', { read: false }).pipe(clean());
});

//#endregion

//#region tsc (typescript compile)

var tsDevelop = tsc.createProject('tsconfig.json', { typescript: require('typescript') });
var tsRelease = tsc.createProject('tsconfig.json', { declaration: true, typescript: require('typescript') });

gulp.task("tsc", function () {
    var tsResult = tsDevelop.src()
        .pipe(tsc(tsDevelop));

    return tsResult.js.pipe(gulp.dest(''));
});

gulp.task("tsc-release", function () {
    var tsResult = tsRelease.src()
        .pipe(tsc(tsRelease));

    //return tsResult.js.pipe(gulp.dest('./dest'));
    return merge([
        tsResult.dts.pipe(gulp.dest('./dest')),
        tsResult.js.pipe(gulp.dest('./dest'))
    ]);
});

//#endregion