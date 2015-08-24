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
