namespace AzurePortalNg {
    'use strict';

    class DataService {

        //#region Constructor

        constructor(public $http: angular.IHttpService, public $q: angular.IQService) {
        }

        //#endregion

        //#region Properties

        //#endregion

        //#region Events

        //#endregion

        //#region Listener

        //#endregion

        //#region Methods

        getData(url: string): angular.IHttpPromise<any[]> {
            var that = this;

            return that.$http({ method: 'GET', url: url })
                .success(function (data: any, status: any, headers: any, config: any) {
            })
                .error(function (data: any, status: any, headers: any, config: any) {
            });
        }

        //#endregion

        //#region Helper

        //#endregion
    }

}