/*
    The following lines should be here, since 'tsc @tsc.txt', which creates apn.d.ts, will otherwise have warnings/errors
    But in production code, this is not the right solution, since the typings must be at this location as well, which is not normally the case
    So for the moment, we have commented out these lines.
/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/ngdialog/ngdialog.d.ts" />
*/

var azurePortalNg: ng.IModule;

(function () {
    'use strict';

    /** Deinfe Angular module and its dependencies */
    azurePortalNg = angular.module('azureportalng', [
    // Angular modules
        'ngResource',
        'ngDialog',
    ]);

    azurePortalNg.config([function (): void {
        //AzurePortalNg.Debug.enable('[azureportalng-debug]');
        //AzurePortalNg.Debug.isWithObjects = false;
    }]);

    azurePortalNg.run(function () {
        AzurePortalNg.Debug.write('[azureportalng-debug] \'azurePortalNg.run\' executing.', [this]);
    });
})();