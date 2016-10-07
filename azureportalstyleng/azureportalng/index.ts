/**
 * @license AzurePortalNg v0.3.0-beta
 * License: ICS
 */
import * as angular from 'angular';
import { AzurePortalHome } from './directives/home/home';

console.log('azureportalng');

export var azureportalng = angular.module('azureportalng', ['ng-dialog'])
    .directive('azurePortalHome', AzurePortalHome.factory());

export default { azureportalng }
