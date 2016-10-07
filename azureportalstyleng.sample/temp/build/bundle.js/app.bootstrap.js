"use strict";
var angular = require('angular');
var app_module_1 = require('./app.module');
console.log('app.bootstrap');
angular.bootstrap(document.body, ['app'], { strictDi: true });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { app: app_module_1.default };
