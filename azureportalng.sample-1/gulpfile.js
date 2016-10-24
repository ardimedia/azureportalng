//#region Properties

'use strict';

var gulp = require('gulp');
var del = require('del');

//#endregion

//#region clean

gulp.task('clean-script', function () {
    del([
        './azureportalng',
    ]);
});

//#endregion
