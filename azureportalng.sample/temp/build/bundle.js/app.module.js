"use strict";
var angular = require('angular');
var shell_controller_1 = require('./shell/shell.controller');
console.log('app.module');
var app = angular.module('app', []) // 'ng-dialog', 'azureportalng'
    .controller('ShellController', shell_controller_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
