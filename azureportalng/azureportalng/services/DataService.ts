namespace AzurePortalNg {
    'use strict';

    class DataService {
        //#region Constructor

        constructor(public $http: angular.IHttpService, public $q: angular.IQService) {
        }

        //#endregion

        //#region Methods

        getData(url: string): angular.IHttpPromise<any[] | any> {
            return this.$http({ method: 'GET', url: url })
                .success((data: any) => {
                    return data;
                })
                .error((error: any) => {
                    return error;
                });
        }

        //#endregion
    }
}