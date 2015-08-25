//#region Register Angular Module

(function () {
    'use strict';
    var app = angular.module('sampleJsApp', ['azureportalng', 'ngResource', 'ngDialog', 'ngMockE2E']);

    app.config([function () {
        AzurePortalNg.Debug.isEnabled = true;
        AzurePortalNg.Debug.isWithObjects = false;
    }]);

    //------------------------------------------------------------------------------------------------------------
    // TODO: 2015-04-25/hp: The sample should define the test environment ($httpBackend) here.
    //                      At the moment it is defined in 'sampleShell.ts'.
    //------------------------------------------------------------------------------------------------------------
    //angular.module('sampleJsApp', ['ngMockE2E'])
    //    .run(function ($httpBackend) {
    //    $httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
    //});
})();

//#endregion
