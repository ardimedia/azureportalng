"use strict";
/**
 * @license azureportalng v0.3.0-beta
 * License: ICS
 */
var angular = require('angular');
var home_1 = require('./directives/home/home');
exports.azureportalng = angular.module('azureportalng', ['ng-dialog'])
    .directive('azurePortalHome', home_1.AzurePortalHome.factory());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = { azureportalng: exports.azureportalng };
