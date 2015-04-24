//#region Register Angular Module

(function () {
    'use strict';
    angular.module('sampleapp', ['azureportalng', 'ngMockE2E']);

    //------------------------------------------------------------------------------------------------------------
    // TODO: 2015-04-25/hp: The sample should define the test environment ($httpBackend) here.
    //                      At the moment it is defined in 'sampleShell.ts'.
    //------------------------------------------------------------------------------------------------------------
    //angular.module('sampleapp', ['ngMockE2E'])
    //    .run(function ($httpBackend) {
    //    $httpBackend.whenGET(/\/AzurePortalNg\/.*/).passThrough();
    //});

})();

//#endregion
