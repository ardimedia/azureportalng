/// <reference path="../node_modules/@types/angular/index.d.ts" />

var azurePortalNg: any; // any should be: angular.IModule

(function () {
    'use strict';

    /** Define Angular module and its dependencies */
    azurePortalNg = angular.module('azureportalng', [
    // Angular modules
        'ngResource',
        'ngDialog'
    ]);

    azurePortalNg.config([function (): void {
        //Debug.enable('[azureportalng-debug]');
        //Debug.isWithObjects = false;
    }]);

    azurePortalNg.run(function () {
        //Debug.write('[azureportalng-debug] \'azurePortalNg.run\' executing.', [this]);
    });
})();