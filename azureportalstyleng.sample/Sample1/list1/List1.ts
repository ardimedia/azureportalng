module Sample1 {

    //#region Class Definition

    class List1 extends AzurePortalNg.BladeList {

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super(portalService, '/Sample1/list1/list1.html', 'List-1', 'TypeScript based', 315);

            this.activate();
        }

        //#endregion

        //#region Methods

        onActivate() {
            AzurePortalNg.Debug.write('[sample1-debug] \'List1.onActivate\' called.', [this]);

            return this.portalService.$http({ method: 'GET', url: '/customers' });
        }

        onCommandNew(): void {
            AzurePortalNg.Debug.write('[sample1-debug] \'List1.onCommandNew\' called.', [this]);

            this.portalService.parameter.action = 'new';
            this.portalService.parameter.item = new Sample1.Customer(0, 'firstName', 'lastName');
            this.portalService.bladeArea.raiseAddBladeEvent({ path: '/Sample1/detail1/detail1.html', pathSender: this.blade.path });
        }

        onNavigateTo(customer: Sample1.Customer) {
            AzurePortalNg.Debug.write('[sample1-debug] \'List1.onNavigateTo\' called.', [this, customer]);

            this.portalService.parameter.action = 'selected';
            this.portalService.parameter.item = customer;
            this.portalService.bladeArea.raiseAddBladeEvent({ path: '/Sample1/detail1/detail1.html', pathSender: this.blade.path });
        }

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        angular.module('sample1App').controller('list1', ['azurePortalNg.portalService', List1]);
    })();

    //#endregion
}