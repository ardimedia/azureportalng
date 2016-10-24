/// <reference path="../azureportalng/js/apn.d.ts" />

(function () {
    /** create angular sample1 module */
    var app: ng.IModule = angular.module('sample1App', [
        'ngResource',
        'ngDialog',
        'azureportalng'
    ]);

    //#region Speical Cases

    /** configure angular */
    //app.config([function (): void {
    //    AzurePortalNg.Debug.enable(); // '[sample1-debug]'
    //    AzurePortalNg.Debug.isEnabled = true;
    //    AzurePortalNg.Debug.isWithObjects = false;
    //}]);

    /** configure angular dialog */
    //app.config(['ngDialogProvider', function (ngDialogProvider: any): void {
    //    ngDialogProvider.setDefaults({
    //        className: 'ngdialog-theme-default',
    //        plain: false,
    //        showClose: false,
    //        closeByDocument: true,
    //        closeByEscape: true,
    //        appendTo: false
    //    });
    //}]);

    /** run angular */
    //app.run(['$templateCache', function ($templateCache) {
    //    $templateCache.removeAll();
    //}]);

    //#endregion

    /** bootstrap angular */
    angular.element(document.body).ready(function () {
        angular.bootstrap(document.body, ['sample1App'], { strictDi: true });
    });
})();