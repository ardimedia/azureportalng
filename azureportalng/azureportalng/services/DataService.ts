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
                .then((data: any) => {
                    return data;
                })
                .catch((error: any) => {
                    return error;
                });
        }

        //#endregion
    }
}