//#region Register Angular Module
(function () {
    'use strict';
    /** Create Angular module and define its dependencies */
    var app = angular.module('azureportalngx', []);
    /** Configure Angular */
    app.config(['ngDialogProvider', function (ngDialogProvider) {
            ngDialogProvider.setDefaults({
                className: 'ngdialog-theme-default',
                plain: false,
                showClose: false,
                closeByDocument: true,
                closeByEscape: true,
                appendTo: false
            });
            //AzurePortalNg.Debug.enable('[azureportalng-debug]');
            AzurePortalNg.Debug.enable('[amms-debug]');
            AzurePortalNg.Debug.isWithObjects = true;
        }]);
    /** Define Angular constants */
    //app.constant("moment", moment);
    console.log('angular initialized');
    console.log(app);
})();
//#endregion 
