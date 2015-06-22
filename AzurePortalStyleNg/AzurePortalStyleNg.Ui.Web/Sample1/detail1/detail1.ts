module Sample1 {
    'use strict';

    //#region Class Definition

    class Detail1 extends AzurePortalNg.BladeDetail {

        //#region Properties

        //#endregion

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super(portalService, '/Sample1/detail1/detail1.html', 'Detail-1', 'TypeScript based', 315);

            this.statusbar = 'Detail-1...';
        }

        //#endregion

        //#region Data Access

        protected onGetDataDetail(): angular.IHttpPromise<any> {
            return this.portalService.$http({ method: 'GET', url: '/customer/1' });
        }

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('sampleapp').controller('detail1', ['azurePortalNg.portalService', Detail1]);
    })();

    //#endregion

}