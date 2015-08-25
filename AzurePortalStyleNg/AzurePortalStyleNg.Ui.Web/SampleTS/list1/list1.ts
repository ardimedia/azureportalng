﻿module SampleTS {
    'use strict';

    //#region Class Definition

    class List1 extends AzurePortalNg.BladeList {

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super(portalService, '/SampleTS/list1/list1.html', 'List-1', 'TypeScript based', 315);

            this.isCommandNew = true;
            this.commandNewText = 'neu';
        }

        //#endregion

        //#region Methods

        onCommandNew(): void {
            AzurePortalNg.Debug.write('[samplets-debug] \'List1.onCommandNew\' called.', [this]);

            this.portalService.parameter.action = 'new';
            this.portalService.parameter.item = new SampleTS.Customer(0, 'firstName', 'lastName');
            this.portalService.bladeArea.raiseAddBladeEvent({ path: '/SampleTS/detail1/detail1.html', pathSender: this.blade.path });
        }

        onNavigateTo(customer: SampleTS.Customer) {
            AzurePortalNg.Debug.write('[samplets-debug] \'List1.onNavigateTo\' called.', [this, customer]);

            this.portalService.parameter.action = 'selected';
            this.portalService.parameter.item = customer;
            this.portalService.bladeArea.raiseAddBladeEvent({ path: '/SampleTS/detail1/detail1.html', pathSender: this.blade.path });
        }

        onGetDataList(): angular.IHttpPromise<any> {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'List1.onGetDataList\' called.', [this]);

            console.log('list1');

            return this.portalService.$http({ method: 'GET', url: '/customers' });
        }

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('sampleTsApp').controller('list1', ['azurePortalNg.portalService', List1]);
    })();

    //#endregion
}