module SampleTS {
    'use strict';

    //#region Class Definition

    class Detail1 extends AzurePortalNg.BladeDetail {

        //#region Properties

        //#endregion

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super(portalService, '/SampleTS/detail1/detail1.html', 'Detail-1', 'TypeScript based', 315);

            this.statusbar = 'Detail-1...';
        }

        //#endregion

        //#region Data Access

        protected onGetDataDetail(): angular.IHttpPromise<any> {

            // TODO: id is undefined, fix that
            var id = 1001;

            return this.portalService.$http({ method: 'GET', url: '/customer/' + id });
        }

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('sampleTsApp').controller('detail1', ['azurePortalNg.portalService', Detail1]);
    })();

    //#endregion
}