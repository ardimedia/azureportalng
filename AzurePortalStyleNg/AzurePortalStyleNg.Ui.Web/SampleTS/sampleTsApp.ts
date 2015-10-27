//#region Register Angular Module

(function () {
    'use strict';
    var app = angular.module('sampleTsApp', ['azureportalng', 'ngResource', 'ngDialog', 'ngMockE2E']);

    app.config([function (): void {
        //AzurePortalNg.Debug.enable('[samplets-debug]');
        AzurePortalNg.Debug.isEnabled = false;
        AzurePortalNg.Debug.isWithObjects = false;
    }]);

    //------------------------------------------------------------------------------------------------------------
    // TODO: 2015-04-25/hp: The sample should define the test environment ($httpBackend) here.
    //                      At the moment it is defined in 'sampleShell.ts'.
    //------------------------------------------------------------------------------------------------------------
    //angular.module('sampleTsApp', ['ngMockE2E'])
    //    .run(function ($httpBackend) {
    //    $httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
    //});
})();

//#endregion
