namespace Sample1 {
    'use strict';

    //#region Class Definition

    class Detail1 extends AzurePortalNg.BladeDetail {

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super(portalService, '/app/detail1/detail1.html', 'Detail-1', 'TypeScript based', 415);

            this.activate();
        }

        //#endregion

        //#region Methods

        onActivate(): angular.IHttpPromise<any> {
            var customer: Sample1.Customer = this.portalService.parameter.item;

            if (this.portalService.parameter.action === 'new') {
                this.item = customer;
                return null;
            } else if (this.portalService.parameter.action === 'selected') {
                return this.portalService.$http({ method: 'GET', url: '/customer/' + customer.customerPkId });
            }
        }

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('sample1App').controller('detail1', ['azurePortalNg.portalService', Detail1]);
    })();

    //#endregion
}