module SampleTS {
    'use strict';

    //#region Class Definition

    class Detail1 extends AzurePortalNg.BladeDetail {

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super(portalService, '/SampleTS/detail1/detail1.html', 'Detail-1', 'TypeScript based', 315);

            this.isCommandSave = true;
            this.commandSaveText = 'speichern';

            this.activate();
        }

        //#endregion

        //#region Methods

        onGetDataDetail(): angular.IHttpPromise<any> {
            var customer: SampleTS.Customer = this.portalService.parameter.item;
            if (this.portalService.parameter.action === 'new') {
                this.item = customer;
                return null;
            } else {
                console.log('Detail1');
                return this.portalService.$http({ method: 'GET', url: '/customer/' + customer.customerPkId });
            }
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