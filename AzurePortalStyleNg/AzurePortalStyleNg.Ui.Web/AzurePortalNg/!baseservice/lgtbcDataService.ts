module AzurePortalNg {
    'use strict';

    //#region Class Definition

    export class LgtbcDataService2 extends AzurePortalNg.DataService {

        //#region Properties

        companies: Amx.Amms.Domain.LgtBc.Model.Company[];

        //#endregion

        //#region Constructor

        constructor($http: angular.IHttpService, $q: angular.IQService) {
            super($http, $q);
        }

        //#endregion

        //#region Company

        setCompanies(): angular.IHttpPromise<Amx.Amms.Domain.LgtBc.Model.Company[]> {
            var that = this;

            return super.getData('/api/lgtbc/CompaniesGetAll')
                .success(function (data: any, status: any, headers: any, config: any) {
                that.companies = angular.fromJson(data);
            })
                .error(function (data: any, status: any, headers: any, config: any) {
            });
        }

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';

        angular.module('lgtbc')
            .service('lgtbcDataService2', ['$http', '$q', LgtbcDataService2]);

    })();

    //#endregion

}