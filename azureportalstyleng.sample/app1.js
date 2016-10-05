(function () {
    'use strict';
    /** bootstrap angular */
    angular.element(document.body).ready(function () {
        console.log('bootstrapping...');
        angular.bootstrap(document.body, ['app1'], { strictDi: true });
    });
    /** create angular app1 module */
    var app = angular.module('app1', [
        'ngResource',
        //'ngDialog',
        'ngMockE2E',
    ]);
    console.log('IModule...');
    /** configure angular */
    app.config([function () {
            //AzurePortalNg.Debug.enable('[samplets-debug]');
            AzurePortalNg.Debug.isEnabled = false;
            AzurePortalNg.Debug.isWithObjects = false;
        }]);
    /** configure angular dialog */
    app.config(['ngDialogProvider', function (ngDialogProvider) {
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
            $templateCache.removeAll();
            console.log('running...');
        }]);
})();
