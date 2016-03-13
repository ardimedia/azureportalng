(function () {
    'use strict';
    /** bootstrap angular */
    angular.element(document.body).ready(function () {
        console.log('bootstrap angular');
        angular.bootstrap(document.body, ['sample1App'], { strictDi: true });
    });
    /** create angular sample1 module */
    var app = angular.module('sample1App', [
        'ngResource',
        'ngDialog',
        'ngMockE2E',
        'azureportalng'
    ]);
    /** configure angular */
    app.config([function () {
            console.log('configure angular');
            AzurePortalNg.Debug.enable('[sample1-debug]');
            AzurePortalNg.Debug.isEnabled = true;
            AzurePortalNg.Debug.isWithObjects = false;
        }]);
    /** configure angular dialog */
    app.config(['ngDialogProvider', function (ngDialogProvider) {
            console.log('configure angular dialog');
            ngDialogProvider.setDefaults({
                className: 'ngdialog-theme-default',
                plain: false,
                showClose: false,
                closeByDocument: true,
                closeByEscape: true,
                appendTo: false
            });
        }]);
    /** run angular */
    app.run(['$templateCache', function ($templateCache) {
            console.log('run angular');
            $templateCache.removeAll();
        }]);
})();
