/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/ngdialog/ngdialog.d.ts" />
// the above lines need to be here, since 'tsc @tsc.txt', which creates apn.d.ts, will have warnings/errors
var azurePortalNg;
(function () {
    'use strict';
    /** Deinfe Angular module and its dependencies */
    azurePortalNg = angular.module('azureportalng', [
        // Angular modules
        'ngResource',
        'ngDialog',
    ]);
    azurePortalNg.config([function () {
            //AzurePortalNg.Debug.enable('[azureportalng-debug]');
            //AzurePortalNg.Debug.isWithObjects = false;
        }]);
    azurePortalNg.run(function () {
        AzurePortalNg.Debug.write('[azureportalng-debug] \'azurePortalNg.run\' executing.', [this]);
    });
})();
//# sourceMappingURL=azureportalng.js.map